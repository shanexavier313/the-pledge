# Generated by Django 3.1.1 on 2020-10-02 03:25

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('calls', '0002_auto_20201002_0107'),
    ]

    operations = [
        migrations.AddField(
            model_name='call',
            name='week_of',
            field=models.DateField(default=datetime.datetime(2020, 10, 2, 3, 25, 59, 66561, tzinfo=utc)),
            preserve_default=False,
        ),
    ]
