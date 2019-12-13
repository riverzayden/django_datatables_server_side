
from django.contrib import admin
from .models import Music

@admin.register(Music)
class MusicAdmin(admin.ModelAdmin):
    list_display = ['song','singer']
    list_display_links = ['song']
    ordering = ('song',)