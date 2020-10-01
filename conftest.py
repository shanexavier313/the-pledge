import pytest

from apps.core.models import CustomUser

@pytest.fixture
def user(django_user_model):
    return django_user_model.objects.create_user(
        first_name='Bruce',
        last_name='Wayne',
        email='bruce@wayneindustries.com',
        password='iamthebatman',
    )
