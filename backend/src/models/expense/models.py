from django.db import models
from src.models.project.models import Project


class Expense(models.Model):
    project     = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='expenses')
    title       = models.CharField(max_length=100)
    amount      = models.IntegerField()

    class Meta:
        ordering = ('-amount',)


    def __str__(self):
        return f"{self.title}"
