from django import forms

class JoinUsForm(forms.Form):
    email = forms.EmailField()
    name = forms.CharField(max_length=100)
    gender = forms.CharField(max_length=10)
    reg_no = forms.CharField(max_length=20)
    phone = forms.CharField(max_length=15)
    course = forms.CharField(max_length=100)
    section = forms.CharField(max_length=10)
    personality = forms.CharField(max_length=20)
    interested_domain = forms.CharField(max_length=50)
    location = forms.CharField(max_length=20)
    year = forms.CharField(max_length=5)
    experience = forms.TextField(blank=True)
    referred_by = forms.CharField(max_length=100)
    confirmation_sent = forms.BooleanField(default=False)
