from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    # We remove username field requirements by making email the primary identifier
    username = None
    email = models.EmailField(unique=True)
    full_name = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=20, blank=True, null=True)

    # Tell Django to use email as the unique identifier for logging in
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['full_name']

    def __str__(self):
        return self.email