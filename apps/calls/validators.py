from django.core.exceptions import ValidationError


def validate_start_of_the_week(date):
    if not date.weekday() == 0:
        raise ValidationError("date must be start of the week")
