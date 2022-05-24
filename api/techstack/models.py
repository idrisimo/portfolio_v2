from django.db import models

# Create your models here.
class Techstack(models.Model):
    tech_name = models.CharField(max_length=100)
    sm_badge_url = models.URLField(max_length=300, null=True, blank=True)
    lg_badge_url = models.URLField(max_length=300, null=True, blank=True)
    
    def __str__(self):
        return self.tech_name
