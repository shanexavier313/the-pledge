import pytest
from rest_framework.test import APIClient


@pytest.fixture
def client():
    return APIClient()


@pytest.fixture
def client_with_credentials(db, user, client):
    client.force_authenticate(user=user)
    yield client
    client.force_authenticate(user=None)


@pytest.fixture
def user(django_user_model):
    return django_user_model.objects.create_user(
        first_name="Bruce",
        last_name="Wayne",
        email="bruce@wayneindustries.com",
        password="iambatman",
    )
