from django.contrib.auth.models import AbstractUser
from django.core.exceptions import ValidationError
from django.dispatch import receiver
from django.db import models
from django.db.models.signals import post_save
from django.utils.crypto import get_random_string

import string
import uuid
from phonenumber_field.modelfields import PhoneNumberField

from .managers import CustomUserManager
from .mixins import TimeStampedModelMixin

class CustomUser(TimeStampedModelMixin, AbstractUser):
    id = models.UUIDField(default=uuid.uuid4, editable=False, db_index=True, primary_key=True)
    username = None
    first_name = models.CharField(max_length=255, blank=True, null=True)
    last_name = models.CharField(max_length=255, blank=True, null=True)
    email = models.EmailField(blank=True, null=True, unique=True)
    mobile_phone = PhoneNumberField(blank=True, null=True, unique=True)
    signup_code = models.CharField(max_length=6, editable=False, unique=True, null=True)

    email_validated_at = models.DateTimeField(null=True, editable=False)
    mobile_phone_validated_at = models.DateTimeField(null=True, editable=False)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name", "last_name"]

    objects = CustomUserManager()

    @property
    def email_verified(self):
        return self.email_validated_at is not None

    @property
    def mobile_phone_verified(self):
        return self.mobile_phone_validated_at is not None

    def __str__(self):
        return self.first_name + ' ' + self.last_name

    def save(self, *args, **kwargs):
        if not any((self.email, self.mobile_phone)):
            raise ValidationError("Either email or mobile phone must be set")

        super().save(*args, **kwargs)



@receiver(post_save, sender=CustomUser)
def generate_signup_code(sender, instance, created, **kwargs):
    if created and instance.signup_code is None:
        while True:
            try:
                instance.signup_code = get_random_string(6, allowed_chars=string.ascii_uppercase + string.digits)
                instance.save()
                break
            except ValidationError:
                pass
