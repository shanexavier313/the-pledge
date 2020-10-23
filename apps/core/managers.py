from django.contrib.auth.base_user import BaseUserManager


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError("Email is required")

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    # def update_user(self, user, email, password, **extra_fields):
    #     if not email:
    #         raise ValueError("Email is required")
    #
    #     if "first_name" in extra_fields:
    #         first_name = extra_fields["first_name"]
    #
    #     if "last_name" in extra_fields:
    #         last_name = extra_fields["last_name"]
    #
    #     email = self.normalize_email(email)
    #
    #     user.email = email
    #     user.first_name = first_name
    #     user.last_name = last_name
    #     user.set_password(password)
    #     user.save()
    #     return user
