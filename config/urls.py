from django.urls import include, path

from rest_framework.routers import DefaultRouter

from apps.calls import views as calls_views


router = DefaultRouter()
router.register("calls", calls_views.CallViewSet, basename="call")
router.register("recipients", calls_views.RecipientViewSet, basename="recipient")

urlpatterns = [
    path("api/", include(router.urls)),
    path("auth/", include("djoser.urls")),
    path("auth/", include("djoser.urls.jwt")),
]
