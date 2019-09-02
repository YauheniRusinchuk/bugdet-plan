from src.models.expense.models import Expense
from src.models.project.models import Project
from src.apps.project.serializers import ExpenseSerializer
from rest_framework import viewsets, status, permissions
from rest_framework.response import Response




class ExpenseViewSet(viewsets.ModelViewSet):

    serializer_class = ExpenseSerializer


    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def get_queryset(self):
        return self.request.user.expenses.all()


    def create(self, request):
        project_id  = request.data.get('project')
        title       = request.data.get('title')
        amount      = request.data.get('amount')
        project = Project.objects.get(id=project_id)
        expense = Expense(project=project, title=title, amount=amount)
        expense.save()
        return Response(status=status.HTTP_201_CREATED)
