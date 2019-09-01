from rest_framework import serializers
from src.models.project.models import Project


class ProjectSerializer(serializers.ModelSerializer):
  class Meta:
    model = Project
    fields = [
        'id',
        'name',
        'budget',
    ]
