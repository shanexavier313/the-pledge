from django.core.exceptions import ValidationError

def validate_start_of_the_week(date):
    if not date.week.weekday == 0:
        raise ValidationError
