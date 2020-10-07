from rest_framework import permissions, viewsets

from .models import Call, Recipient
from .serializers import CallSerializer, RecipientSerializer


class CallViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = Call.objects.all()
    serializer_class = CallSerializer

    def perform_create(self, serializer):
        serializer.save(caller=self.request.user)


class RecipientViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = Recipient.objects.all()
    serializer_class = RecipientSerializer
