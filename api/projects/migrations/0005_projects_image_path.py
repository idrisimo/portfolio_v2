# Generated by Django 4.0.4 on 2022-05-18 13:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0004_alter_projects_overview'),
    ]

    operations = [
        migrations.AddField(
            model_name='projects',
            name='image_path',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
