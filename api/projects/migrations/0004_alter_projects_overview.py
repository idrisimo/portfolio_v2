# Generated by Django 4.0.4 on 2022-05-18 12:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0003_alter_projects_overview'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projects',
            name='overview',
            field=models.TextField(blank=True, max_length=200, null=True),
        ),
    ]
