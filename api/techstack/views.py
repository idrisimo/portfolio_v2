from django.shortcuts import render, HttpResponse
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Techstack
from .serializers import TechstackSerializer

@api_view(['GET'])
def get_techstackAPI(request):
    techstack = Techstack.objects.all()
    serializer = TechstackSerializer(techstack, many=True)
    
    return Response(serializer.data)
