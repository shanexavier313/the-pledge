from django.contrib.auth import get_user_model

from rest_framework import generics
from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import CustomUserSerializer, LogInSerializer


class SignUpView(generics.CreateAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = CustomUserSerializer


class LogInView(TokenObtainPairView):
    serializer_class = LogInSerializer
