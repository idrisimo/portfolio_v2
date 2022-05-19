from django.db import models

# Create your models here.
class Projects(models.Model):
    title = models.CharField(max_length=200)
    overview = models.TextField(max_length=200, null=True, blank=True)
    project_difficulties = models.TextField(null=True, blank=True)
    project_solutions =  models.TextField(null=True, blank=True)
    technology = models.CharField(max_length=200)
    image_path = models.CharField(max_length=100, null=True, blank=True)
    s3_image_path = models.URLField(max_length=200, null=True, blank=True)
    project_link = models.URLField(max_length=200, null=True, blank=True)
    github_link = models.URLField(max_length=200, null=True, blank=True)
    
    def __str__(self):
        return self.title
