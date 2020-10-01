from django.db import models


from localflavor.us.models import USStateField


from apps.core.mixins import TimeStampedModelMixin


class Call(TimeStampedModelMixin, models.Model):
    completed = models.BooleanField(default=False)
    completed_at = models.DateTimeField(null=True, editable=False)
    notes = models.TextField(blank=True, null=True)
    recipient = models.ForeignKey(
        'calls.Recipient',
        on_delete=models.PROTECT,
        related_name = "calls"
    )

class Recipient(TimeStampedModelMixin, models.Model):
    first_name = models.CharField(max_length=255, blank=True, null=True)
    last_name = models.CharField(max_length=255, blank=True, null=True)

    class VoterStatus(models.TextChoices):
        REGISTERED = 're'
        NOT_REGISTERED = 'nr'
        UNKNOWN = 'un'

    state_residence = USStateField(null=True, blank=True)
    state_registered = USStateField(null=True, blank=True)
    registered_to_vote = models.CharField(
        max_length=2,
        choices=VoterStatus.choices,
        default=VoterStatus.UNKNOWN,
        blank=True,
    )

    class PoliticalLeaning(models.TextChoices):
        FAR_LEFT='fl'
        LEFT='le'
        CENTER_LEFT='cl'
        MIDDLE='m'
        CENTER_RIGHT='cr'
        RIGHT='ri'
        FAR_RIGHT='fr'
        UNKNOWN='uk'

    political_leaning = models.CharField(
        max_length=2,
        choices=PoliticalLeaning.choices,
        default=PoliticalLeaning.UNKNOWN,
        blank=True,
    )


    @property
    def requires_absentee_ballot(self):
        return state_registered and state_registered is not state_residence
