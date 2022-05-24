from rest_framework import serializers
from .models import Techstack

class TechstackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Techstack
        fields = ['tech_name', 'sm_badge_url', 'lg_badge_url']
