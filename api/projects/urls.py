from django.urls import path
from .views import get_projectsAPI, get_reddit_data

app_name='projects'
urlpatterns = [
   path('', get_projectsAPI, name='get_projects'),
   path('getredditdata/', get_reddit_data, name='collect_reddit_data')
]
 