from django.contrib.auth import get_user_model

import pytest
from rest_framework.reverse import reverse


@pytest.mark.django_db
@pytest.mark.parametrize(
    "email, password, status_code",
    [
        ("", "", 400),
        ("", "iambatman", 400),
        ("bruce@wayneindustries.com", "", 400),
        ("bruce@wayneindustries.com", "iamnotbatman", 401),
        ("bruce@wayneindustries.com", "password", 200),
    ],
)
def test_login_data_validation(email, password, status_code, client, user):
    url = reverse("login")
    data = {"email": email, "password": password}
    response = client.post(url, data=data)

    assert response.status_code == status_code


def test_sign_up_data_validations(db, client):
    url = reverse("signup")
    data = {
        "email": "user@example.com",
        "first_name": "Test",
        "last_name": "User",
        "password1": "password",
        "password2": "password",
    }
    response = client.post(url, data=data)

    user = get_user_model().objects.last()

    assert response.status_code == 201
    assert response.data["id"] == str(user.id)
    assert response.data["first_name"] == user.first_name


def test_user_can_update_account(user, client):
    url = reverse("account")
    data = {
        "email": "user@example.com",
        "first_name": "Test",
        "last_name": "User",
        "password1": "password",
        "password2": "password",
    }

    client.login(email=user.email, password="password")
    response = client.put(url, data=data)

    client.force_authenticate(user=None)

    user.refresh_from_db()

    assert response.status_code == 200
    assert user.email == "user@example.com"
