from django.contrib import admin
from django.urls import include, path

from rest_framework_simplejwt.views import TokenRefreshView

from apps.calls import views as calls_views
from apps.core import views as core_views


core_patterns = [
    path("signup/", core_views.SignUpView.as_view(), name="signup"),
    path("login/", core_views.LogInView.as_view(), name="login"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]

calls_patterns = [
    path("calls/", calls_views.ListCall.as_view()),
    path("call/<int:pk>/", calls_views.DetailCall.as_view()),
    path("recipients/", calls_views.ListRecipient.as_view()),
    path("recipient/<int:pk>/", calls_views.DetailRecipient.as_view()),
]


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include(core_patterns)),
    path("api/", include(calls_patterns)),
]
