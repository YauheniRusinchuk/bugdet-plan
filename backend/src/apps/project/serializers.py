from rest_framework import serializers
from src.models.project.models import Project
from src.models.expense.models import Expense


class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = [
            'project',
            'id',
            'title',
            'amount',
        ]



class ProjectSerializer(serializers.ModelSerializer):

    expenses = ExpenseSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = [
            'id',
            'name',
            'budget',
            'expenses',
        ]
