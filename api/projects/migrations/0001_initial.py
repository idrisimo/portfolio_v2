# Generated by Django 4.0.4 on 2022-05-17 14:29

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Projects',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('overview', models.CharField(blank=True, max_length=100, null=True)),
                ('project_difficulties', models.TextField(blank=True, null=True)),
                ('project_solutions', models.TextField(blank=True, null=True)),
                ('technology', models.CharField(max_length=200)),
                ('s3_image_path', models.URLField(blank=True, null=True)),
            ],
        ),
    ]
