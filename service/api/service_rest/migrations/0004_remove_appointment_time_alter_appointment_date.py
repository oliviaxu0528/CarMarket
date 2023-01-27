# Generated by Django 4.0.3 on 2023-01-26 18:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0003_rename_canceled_appointment_cancelled'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='appointment',
            name='time',
        ),
        migrations.AlterField(
            model_name='appointment',
            name='date',
            field=models.DateTimeField(blank=True, max_length=20, null=True),
        ),
    ]