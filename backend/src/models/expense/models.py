from django.db import models
from src.models.project.models import Project
from django.contrib.auth import get_user_model

User = get_user_model()


class Expense(models.Model):
    owner       = models.ForeignKey(User, on_delete=models.CASCADE, related_name='expens_all')
    project     = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='expenses')
    title       = models.CharField(max_length=100)
    amount      = models.IntegerField()

    class Meta:
        ordering = ('-amount',)


    def __str__(self):
        return f"{self.title}"
