from django.shortcuts import render, HttpResponse
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Projects
from .serializers import ProjectsSerializer

from .projectScripts.redditTopPosts import RedditTopPosts

@api_view(['GET'])
def get_projectsAPI(request):
    projects = Projects.objects.all()
    serializer = ProjectsSerializer(projects, many=True)
    
    return Response(serializer.data)


@api_view(['POST', 'GET'])
def get_reddit_data(request):
    # reddit = rtp.reddit_auth()

    if request.method == 'POST':
        subRedditName_req = request.data
        subRedditName = subRedditName_req['subName']
   
    rtp = RedditTopPosts(sub_name=subRedditName)

    Json_Item = {"subreddit_array": rtp.reddit_data(500), "subreddit_icon": rtp.subreddit_logo()}
    return Response(Json_Item)
