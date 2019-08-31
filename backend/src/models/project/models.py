from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class Project(models.Model):

    user = models.ForeignKey(User, related_name='projects', on_delete=models.CASCADE)
    name = models.CharField(max_length=255, blank=False)
