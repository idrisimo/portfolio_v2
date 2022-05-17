from rest_framework import serializers
from .models import Projects

class ProjectsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = ['title', 'overview', 'project_difficulties', 'project_solutions', 'technology', 's3_image_path']
