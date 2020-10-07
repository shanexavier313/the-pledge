from rest_framework import generics

from .models import Call, Recipient
from .serializers import CallSerializer, RecipientSerializer


class ListCall(generics.ListCreateAPIView):
    queryset = Call.objects.all()
    serializer_class = CallSerializer


class DetailCall(generics.RetrieveUpdateDestroyAPIView):
    queryset = Call.objects.all()
    serializer_class = CallSerializer


class ListRecipient(generics.ListCreateAPIView):
    queryset = Recipient.objects.all()
    serializer_class = RecipientSerializer


class DetailRecipient(generics.RetrieveUpdateDestroyAPIView):
    queryset = Recipient.objects.all()
    serializer_class = RecipientSerializer
