from django import forms
from .models import JoinUs

class JoinUsForm(forms.ModelForm):
    class Meta:
        model = JoinUs
        fields = [
            'email', 'name', 'gender', 'reg_no', 'phone', 
            'course', 'section', 'personality', 'interested_domain', 
            'location', 'year', 'experience', 'referred_by'
        ]
