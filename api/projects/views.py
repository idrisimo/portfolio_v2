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
def collect_reddit_data(request):
    # reddit = rtp.reddit_auth()
    
    # subRedditName_req = request.data
    # subRedditName = subRedditName_req['subRedditName']
    # request.session.save()
    rtp = RedditTopPosts(sub_name='learnpython')
    print(rtp.reddit_data(300))
    # collect_reddit_data.subarray = rtp.reddit_data(300)
    # collect_reddit_data.subarray = rtp.subreddit_logo()
    return Response()

@api_view(['POST', 'GET'])
def show_reddit_data(request):
    subreddit_array = collect_reddit_data.subarray
    subreddit_icon = collect_reddit_data.sublogo
    Json_Item = {"subreddit_array": subreddit_array, "subreddit_icon": subreddit_icon}
    return Response(Json_Item)
