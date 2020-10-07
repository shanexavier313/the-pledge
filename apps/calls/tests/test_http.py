from datetime import datetime

from rest_framework.reverse import reverse

from ..date_helpers import start_of_week


def test_user_can_view_calls(create_user, create_recipient, create_call, client):
    user = create_user()
    recipient = create_recipient()
    call = create_call(caller=user, recipient=recipient)

    client.login(email=user.email, password="password")
    url = reverse("call-list")
    response = client.get(url)

    client.force_authenticate(user=None)

    assert response.data[0]["recipient"] == recipient.id


def test_user_can_create_a_call(create_user, create_recipient, client):
    user = create_user()
    recipient = create_recipient()

    data = {
        "recipient": recipient.id,
        "notes": "",
        "week_of": start_of_week(datetime.now()).strftime("%m-%d-%Y"),
    }

    client.login(email=user.email, password="password")
    url = reverse("call-list")
    response = client.post(url, data=data)

    client.force_authenticate(user=None)

    assert response.status_code == 201
