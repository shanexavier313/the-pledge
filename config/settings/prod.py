import os

from .common import *  # noqa: F401,F403


DEBUG = False

ALLOWED_HOSTS = ["sharethepledge.com", "18.224.19.10"]

CORS_ORIGIN_ALLOW_ALL = False
CORS_ORIGIN_WHITELIST = (
    "https://sharethepledge.com",
    "https://www.sharethepledge.com",
)

CSRF_COOKIE_SECURE = True
SESSION_COOKIE_SECURE = True
SECURE_SSL_REDIRECT = True

LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "handlers": {"console": {"class": "logging.StreamHandler",},},
    "root": {"handlers": ["console"], "level": "WARNING",},
    "loggers": {
        "django": {
            "handlers": ["console"],
            "level": os.environ.get("DJANGO_LOG_LEVEL", "INFO"),
            "propagate": False,
        },
    },
}
