from django.contrib import admin
from django.contrib.admin import ModelAdmin

from .models import Call, Recipient


class CallAdmin(ModelAdmin):
    model = Call


class RecipientAdmin(ModelAdmin):
    model = Recipient


admin.site.register(Call, CallAdmin)
admin.site.register(Recipient, RecipientAdmin)
