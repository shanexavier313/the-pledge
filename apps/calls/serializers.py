from rest_framework import serializers

from .models import Call, Recipient


class CallSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            "id",
            "completed",
            "notes",
        )
        model = Call


class RecipientSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ("id" "first_name", "last_name,")
        model = Recipient
