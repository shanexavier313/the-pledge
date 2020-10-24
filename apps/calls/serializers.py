from rest_framework import serializers

from .models import Call, Recipient


class CallSerializer(serializers.ModelSerializer):
    date = serializers.DateField(format="%m/%d/%Y")

    class Meta:
        fields = ("id", "completed", "caller", "notes", "recipient", "date")
        model = Call
        read_only_fields = ("id", "caller", "created", "updated")


class RecipientSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            "id",
            "first_name",
            "last_name",
            "state_residence",
            "state_registered",
            "registered_to_vote",
            "political_leaning",
            "user",
        )
        model = Recipient
        read_only_fields = ("id", "user", "created", "updated")
