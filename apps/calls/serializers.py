from rest_framework import serializers

from .models import Call, Recipient


class CallSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ("notes", "recipient", "week_of")
        model = Call
        read_only_fields = ("id", "caller", "created", "updated")


class RecipientSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            "first_name",
            "last_name",
            "state_residence",
            "state_registered",
            "registered_to_vote",
            "political_leaning",
            "calls",
        )
        model = Recipient
        read_only_fields = ("id", "created", "updated")
