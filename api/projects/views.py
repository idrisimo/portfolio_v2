from django.shortcuts import render, HttpResponse
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Projects
from .serializers import ProjectsSerializer

@api_view(['GET'])
def get_projectsAPI(request):
    projects = Projects.objects.all()
    serializer = ProjectsSerializer(projects, many=True)
    print('test')
    return Response(serializer.data)
