from django import forms
from .models import Music

class MusicsForm(forms.ModelForm):
    class Meta:
        model = Music
        fields = '__all__'
