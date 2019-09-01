from src.models.project.models import Project
from rest_framework import viewsets, permissions
from .serializers import ProjectSerializer

# Lead Viewset


class ProjectViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = ProjectSerializer

    def get_queryset(self):
        return self.request.user.projects.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
