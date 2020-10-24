import string

from django.contrib.auth.models import AbstractBaseUser
from django.core.exceptions import ValidationError
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils.crypto import get_random_string

from phonenumber_field.modelfields import PhoneNumberField

from .managers import CustomUserManager
from .mixins import TimeStampedModelMixin


class CustomUser(TimeStampedModelMixin, AbstractBaseUser):
    is_active = models.BooleanField("active", default=True)
    is_staff = models.BooleanField(default=False)

    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(
        unique=True, error_messages={"unique": "Account with this email already exists"}
    )
    mobile_phone = PhoneNumberField(blank=True, null=True, unique=True)
    signup_code = models.CharField(max_length=6, editable=False, unique=True, null=True)
    mobile_phone_validated_at = models.DateTimeField(null=True, editable=False)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name", "last_name"]

    objects = CustomUserManager()

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

    class Meta:
        verbose_name = "user"

    @property
    def mobile_phone_verified(self):
        return self.mobile_phone_validated_at is not None


@receiver(post_save, sender=CustomUser)
def generate_signup_code(sender, instance, created, **kwargs):
    if created and instance.signup_code is None:
        while True:
            try:
                instance.signup_code = get_random_string(
                    6, allowed_chars=string.ascii_uppercase + string.digits
                )
                instance.save()
                break
            except ValidationError:
                pass
