# Generated by Django 3.1.1 on 2020-10-01 06:12

from django.db import migrations, models
import django.db.models.deletion
import localflavor.us.models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Recipient",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("created", models.DateTimeField(auto_now_add=True)),
                ("modified", models.DateTimeField(auto_now=True)),
                ("first_name", models.CharField(blank=True, max_length=255, null=True)),
                ("last_name", models.CharField(blank=True, max_length=255, null=True)),
                (
                    "state_residence",
                    localflavor.us.models.USStateField(
                        blank=True, max_length=2, null=True
                    ),
                ),
                (
                    "state_registered",
                    localflavor.us.models.USStateField(
                        blank=True, max_length=2, null=True
                    ),
                ),
                (
                    "registered_to_vote",
                    models.CharField(
                        blank=True,
                        choices=[
                            ("re", "Registered"),
                            ("nr", "Not Registered"),
                            ("un", "Unknown"),
                        ],
                        default="un",
                        max_length=2,
                    ),
                ),
                (
                    "political_leaning",
                    models.CharField(
                        blank=True,
                        choices=[
                            ("fl", "Far Left"),
                            ("le", "Left"),
                            ("cl", "Center Left"),
                            ("m", "Middle"),
                            ("cr", "Center Right"),
                            ("ri", "Right"),
                            ("fr", "Far Right"),
                            ("uk", "Unknown"),
                        ],
                        default="uk",
                        max_length=2,
                    ),
                ),
            ],
            options={"abstract": False,},
        ),
        migrations.CreateModel(
            name="Call",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("created", models.DateTimeField(auto_now_add=True)),
                ("modified", models.DateTimeField(auto_now=True)),
                ("completed", models.BooleanField(default=False)),
                ("completed_at", models.DateTimeField(editable=False, null=True)),
                ("notes", models.TextField(blank=True, null=True)),
                (
                    "recipient",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.PROTECT,
                        related_name="calls",
                        to="calls.recipient",
                    ),
                ),
            ],
            options={"abstract": False,},
        ),
    ]
