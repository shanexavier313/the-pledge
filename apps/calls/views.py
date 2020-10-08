from rest_framework import permissions, viewsets

from .models import Call, Recipient
from .serializers import CallSerializer, RecipientSerializer


class CallViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    serializer_class = CallSerializer

    def perform_create(self, serializer):
        serializer.save(caller=self.request.user)

    def get_queryset(self):
        user = self.request.user
        return Call.objects.filter(caller=user)


class RecipientViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    serializer_class = RecipientSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_queryset(self):
        user = self.request.user
        return Recipient.objects.filter(user=user)
