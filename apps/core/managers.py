from django.contrib.auth.base_user import BaseUserManager


class CustomUserManager(BaseUserManager):
    """
    This was pulled from the blog post here on custom user models:
    https://testdriven.io/blog/django-custom-user-model/#model-manager
    Custom user model manager where email is the unique identifier
    for authentication instead of username.
    """

    def create_user(self, email, password, **extra_fields):
        """
        Create and save a User with the given email and password.
        """
        if not email:
            raise ValueError("Email is required")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def update_user(self, user, email, password, **extra_fields):

        if not email:
            raise ValueError("Email is required")

        if "first_name" in extra_fields:
            first_name = extra_fields["first_name"]

        if "last_name" in extra_fields:
            last_name = extra_fields["last_name"]

        email = self.normalize_email(email)

        user.email = email
        user.first_name = first_name
        user.last_name = last_name
        user.set_password(password)
        user.save()
        return user

    def create_staff(self, email, password, **extra_fields):
        """
        Create and save a Staff user with given email and password
        """
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", False)
        extra_fields.setdefault("is_active", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Staff must have is_staff=True.")
        if extra_fields.get("is_superuser") is not False:
            raise ValueError("Staff must have is_superuser=False.")
        return self.create_user(email, password, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        """
        Create and save a SuperUser with the given email and password.
        """
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")
        return self.create_user(email, password, **extra_fields)

    def get_queryset(self):
        return super().get_queryset().filter(is_active=True)
