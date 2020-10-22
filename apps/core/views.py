from django.contrib.auth import get_user_model

from rest_framework import generics
from rest_framework_simplejwt.views import TokenObtainPairView

from .permissions import IsUser
from .serializers import CustomUserSerializer, LogInSerializer


class SignUpView(generics.CreateAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = CustomUserSerializer


class LogInView(TokenObtainPairView):
    serializer_class = LogInSerializer


class UpdateAccountView(generics.UpdateAPIView):
    permission_classes = (IsUser,)
    serializer_class = CustomUserSerializer

    def get_object(self):
        user = self.request.user
        return user
