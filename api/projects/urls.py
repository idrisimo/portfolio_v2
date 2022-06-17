from django.urls import path
from .views import get_projectsAPI, collect_reddit_data, show_reddit_data

app_name='projects'
urlpatterns = [
   path('', get_projectsAPI, name='get_projects'),
   path('/collectredditdata', collect_reddit_data, name='collect_reddit_data'),
   path('/showredditdata', show_reddit_data, name='show_reddit_data')
]
