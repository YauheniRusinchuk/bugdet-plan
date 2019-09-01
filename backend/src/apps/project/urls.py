from rest_framework import routers
from .views import ProjectViewSet

router = routers.DefaultRouter()
router.register('api/v1/projects/all', ProjectViewSet, 'projects')

urlpatterns = router.urls
