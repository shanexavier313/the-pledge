from datetime import datetime

from django.core.exceptions import ValidationError

import pytest

from ..date_helpers import start_of_week
from ..models import Call


def test_clean(create_user, create_recipient, create_call):
    caller = create_user()
    recipient = create_recipient()

    call = Call(
        caller=caller, recipient=recipient, week_of=start_of_week(datetime.now()),
    )

    with pytest.raises(ValidationError) as _:
        call.save()
