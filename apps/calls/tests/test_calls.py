from datetime import datetime

from django.core.exceptions import ValidationError

import pytest

from ..models import Call


def test_clean(create_user, create_recipient, create_call):
    caller = create_user()
    recipient = create_recipient()

    call = Call(caller=caller, recipient=recipient, date=(datetime.now().date()),)

    with pytest.raises(ValidationError) as _:
        call.save()
