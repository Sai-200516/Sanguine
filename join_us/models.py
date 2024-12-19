from django.db import models

class JoinUs(models.Model):
    email = models.EmailField()
    name = models.CharField(max_length=100)
    gender = models.CharField(max_length=10)
    reg_no = models.CharField(max_length=20)
    phone = models.CharField(max_length=15)
    course = models.CharField(max_length=100)
    section = models.CharField(max_length=10)
    personality = models.CharField(max_length=20)
    interested_domain = models.CharField(max_length=50)
    location = models.CharField(max_length=20)
    year = models.CharField(max_length=5)
    experience = models.TextField(blank=True)
    referred_by = models.CharField(max_length=100)
    confirmation_sent = models.BooleanField(default=False)

    def __str__(self):
        return self.name
