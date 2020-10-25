from .common import *  # noqa: F401,F403


CORS_ORIGIN_ALLOW_ALL = True
ALLOWED_HOSTS = ["*"]

INSTALLED_APPS += [
    "django_extensions",
    "corsheaders",
]

MIDDLEWARE.insert(0, "corsheaders.middleware.CorsMiddleware")

URL_SCHEME = "http"
