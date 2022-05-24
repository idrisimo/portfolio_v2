from django.urls import path
from .views import get_techstackAPI

app_name='techstack'
urlpatterns = [
   path('', get_techstackAPI, name='get_techstack')
]
