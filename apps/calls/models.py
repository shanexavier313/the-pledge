from datetime import datetime

from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

from localflavor.us.models import USStateField
from rest_framework.reverse import reverse

from apps.core.mixins import TimeStampedModelMixin

from .validators import validate_start_of_the_week


class Call(TimeStampedModelMixin, models.Model):
    completed = models.BooleanField(default=False)
    completed_at = models.DateTimeField(null=True, editable=False)
    notes = models.TextField(blank=True, null=True)
    week_of = models.DateField(validators=[validate_start_of_the_week])

    caller = models.ForeignKey(
        "core.CustomUser", on_delete=models.CASCADE, related_name="calls",
    )

    recipient = models.ForeignKey(
        "calls.Recipient", on_delete=models.PROTECT, related_name="calls"
    )

    def __str__(self):
        return f"{self.recipient} | Week of {self.week_of.strftime('%-m/%-d/%y')}"

    def get_absolute_url(self):
        return reverse("call:call_detail", kwargs={"call_id": self.id})


@receiver(post_save, sender=Call)
def log_completed_at(sender, instance, **kwargs):
    if instance.completed and instance.completed_at is None:
        instance.completed_at = datetime.now()
        instance.save()


class Recipient(TimeStampedModelMixin, models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255, blank=True, null=True)

    class VoterStatus(models.TextChoices):
        REGISTERED = "re"
        NOT_REGISTERED = "nr"
        UNKNOWN = "un"

    state_residence = USStateField()
    state_registered = USStateField(null=True, blank=True)
    registered_to_vote = models.CharField(
        max_length=2,
        choices=VoterStatus.choices,
        default=VoterStatus.UNKNOWN,
        blank=True,
    )

    class PoliticalLeaning(models.TextChoices):
        FAR_LEFT = "fl"
        LEFT = "le"
        CENTER_LEFT = "cl"
        MIDDLE = "m"
        CENTER_RIGHT = "cr"
        RIGHT = "ri"
        FAR_RIGHT = "fr"
        UNKNOWN = "uk"

    political_leaning = models.CharField(
        max_length=2,
        choices=PoliticalLeaning.choices,
        default=PoliticalLeaning.UNKNOWN,
        blank=True,
    )

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

    @property
    def requires_absentee_ballot(self):
        return (
            self.state_registered and self.state_registered is not self.state_residence
        )

    def get_absolute_url(self):
        return reverse("recipient:recipient_detail", kwargs={"recipient_id": self.id})
