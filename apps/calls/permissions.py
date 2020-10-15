from rest_framework import permissions


class IsCallerOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.caller == request.user


class IsUserOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.user == request.user
