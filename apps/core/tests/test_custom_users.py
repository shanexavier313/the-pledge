from django.core.exceptions import ValidationError

import pytest


def test_user(user):
    assert len(user.signup_code) == 6
    assert str(user) == "Bruce Wayne"


def test_clean(django_user_model):
    with pytest.raises(ValidationError) as _:
        django_user_model.objects.create(password="password",)


def test_create_staff_wrong_is_staff(django_user_model):
    with pytest.raises(ValueError) as _:
        django_user_model.objects.create_staff(
            first_name="Example",
            last_name="Admin",
            email="admin@example.com",
            password="password",
            is_staff=False,
        )


def test_create_staff_wrong_is_superuser(django_user_model):
    with pytest.raises(ValueError) as _:
        django_user_model.objects.create_staff(
            first_name="Example",
            last_name="Admin",
            email="admin@example.com",
            password="password",
            is_superuser=True,
        )


def test_create_superuser_wrong_is_staff(django_user_model):
    with pytest.raises(ValueError) as _:
        django_user_model.objects.create_superuser(
            first_name="Example",
            last_name="Admin",
            email="admin@example.com",
            password="password",
            is_staff=False,
        )


def test_create_superuser_wrong_is_superuser(django_user_model):
    with pytest.raises(ValueError) as _:
        django_user_model.objects.create_superuser(
            first_name="Example",
            last_name="Admin",
            email="admin@example.com",
            password="password",
            is_superuser=False,
        )
