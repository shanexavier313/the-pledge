from datetime import timedelta


def start_of_week(date):
    try:
        return date - timedelta(days=date.weekday())
    except:
        raise ValueError("Requires a valid datetime object")
