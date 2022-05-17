from django.urls import path
from .views import get_projectsAPI

app_name='projects'
urlpatterns = [
   path('', get_projectsAPI, name='get_projects')
]
