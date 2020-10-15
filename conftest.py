from datetime import datetime

import pytest
from rest_framework.test import APIClient

from apps.calls.models import Call, Recipient


@pytest.fixture
def client():
    return APIClient()


@pytest.fixture
def create_client_with_credentials(create_user, client, db):
    def _create_client_with_credentials(**kwargs):
        user = kwargs.get("user", create_user())
        client.force_authenticate(user=user)
        yield client
        client.force_authenticate(user=None)

    yield _create_client_with_credentials


@pytest.fixture
def create_user(django_user_model, faker):
    def _create_user(**kwargs):
        return django_user_model.objects.create_user(
            first_name=kwargs.get("first_name", faker.first_name()),
            last_name=kwargs.get("last_name", faker.last_name()),
            email=kwargs.get("email", faker.email()),
            password=kwargs.get("password", "password"),
        )

    return _create_user


@pytest.fixture
def create_recipient(faker, create_user):
    def _create_recipient(**kwargs):
        return Recipient.objects.create(
            user=kwargs.get("user", create_user()),
            first_name=kwargs.get("first_name", faker.first_name()),
            last_name=kwargs.get("last_name", faker.last_name()),
            state_residence=kwargs.get("state_residence", faker.state_abbr()),
        )

    return _create_recipient


@pytest.fixture
def create_call(create_user, create_recipient):
    def _create_call(**kwargs):
        caller = create_user()
        return Call.objects.create(
            caller=kwargs.get("caller", caller),
            recipient=kwargs.get("recipient", create_recipient(user=caller)),
            date=kwargs.get("date", datetime.now().date()),
        )

    return _create_call


@pytest.fixture
def user(create_user):
    return create_user(
        first_name="Bruce",
        last_name="Wayne",
        email="bruce@wayneindustries.com",
        password="password",
    )


@pytest.fixture
def user_with_calls_and_recipients(create_user, create_call, create_recipient):
    def _user_with_calls_and_recipients(**kwargs):
        user = kwargs.get("user", create_user())
        for _ in range(3):
            recipient = create_recipient(user=user)
            create_call(caller=user, recipient=recipient)

        return user

    return _user_with_calls_and_recipients
