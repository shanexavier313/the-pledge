from datetime import datetime

from rest_framework.reverse import reverse

from ..date_helpers import start_of_week


def test_user_can_view_recipients(create_recipient, create_call, client):
    recipient = create_recipient()

    create_recipient()  #  extra recipient to test query

    client.login(email=recipient.user.email, password="password")
    url = reverse("recipient-list")
    response = client.get(url)

    client.force_authenticate(user=None)

    assert len(response.data) == 1
    assert response.data[0]["first_name"] == recipient.first_name
    assert response.data[0]["user"] == recipient.user.id


def test_user_can_view_calls(create_user, create_recipient, create_call, client):
    user = create_user()
    recipient = create_recipient()
    call = create_call(caller=user, recipient=recipient)

    create_call()  #  extra call to test query

    client.login(email=user.email, password="password")
    url = reverse("call-list")
    response = client.get(url)

    client.force_authenticate(user=None)

    assert len(response.data) == 1
    assert response.data[0]["caller"] == user.id
    assert response.data[0]["recipient"] == recipient.id


def test_user_can_create_a_recipient(create_user, client):
    user = create_user()

    data = {
        "first_name": "Test",
        "last_name": "Recipient",
        "state_residence": "PA",
    }

    client.login(email=user.email, password="password")
    url = reverse("recipient-list")
    response = client.post(url, data=data)

    client.force_authenticate(user=None)

    assert response.status_code == 201
    assert response.data["user"] == user.id
    assert response.data["state_residence"] == "PA"


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
    assert response.data["caller"] == user.id
    assert response.data["recipient"] == recipient.id
