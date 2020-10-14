from django.contrib import admin
from django.urls import include, path

from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenRefreshView

from apps.calls import views as calls_views
from apps.core import views as core_views


router = DefaultRouter()
router.register("calls", calls_views.CallViewSet, basename="call")
router.register("recipients", calls_views.RecipientViewSet, basename="recipient")


core_patterns = [
    path("signup/", core_views.SignUpView.as_view(), name="signup"),
    path("login/", core_views.LogInView.as_view(), name="login"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]

api_urls = router.urls + core_patterns

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include(api_urls)),
]
