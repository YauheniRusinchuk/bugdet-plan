from rest_framework import routers
from .views import ExpenseViewSet

router = routers.DefaultRouter()
router.register('api/v1/expense/create', ExpenseViewSet, 'expense')

urlpatterns = router.urls
