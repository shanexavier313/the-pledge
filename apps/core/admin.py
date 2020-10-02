from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserChangeForm, CustomUserCreationForm
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = get_user_model()
    list_display = ('first_name', 'last_name','email', 'mobile_phone', 'is_staff', 'is_active',)
    list_filter = ('email', 'mobile_phone', 'is_staff', 'is_active',)
    readonly_fields = ('signup_code',)
    fieldsets = (
        (None, {'fields': ('first_name', 'last_name', 'email', 'mobile_phone', 'password', 'signup_code',)}),
        ('Permissions', {'fields': ('is_staff', 'is_active',)}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('first_name', 'last_name', 'email', 'mobile_phone', 'password1', 'password2', 'is_staff', 'is_active',)}
        ),
    )
    search_fields = ('email','first_name', 'last_name',)
    ordering = ('email','first_name',)


admin.site.register(get_user_model(), CustomUserAdmin)
