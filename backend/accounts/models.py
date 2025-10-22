from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    user_type_name = models.CharField(max_length=50, default='job_seeker')
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
