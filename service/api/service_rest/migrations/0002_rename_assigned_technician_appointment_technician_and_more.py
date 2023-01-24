# Generated by Django 4.0.3 on 2023-01-24 21:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='appointment',
            old_name='assigned_technician',
            new_name='technician',
        ),
        migrations.RemoveField(
            model_name='appointment',
            name='appointment_date',
        ),
        migrations.RemoveField(
            model_name='appointment',
            name='owner_name',
        ),
        migrations.RemoveField(
            model_name='appointment',
            name='reason_for_visit',
        ),
        migrations.AddField(
            model_name='appointment',
            name='customer_name',
            field=models.CharField(default=False, max_length=100),
        ),
        migrations.AddField(
            model_name='appointment',
            name='date',
            field=models.DateField(blank=True, max_length=20, null=True),
        ),
        migrations.AddField(
            model_name='appointment',
            name='reason',
            field=models.TextField(default=False),
        ),
        migrations.AddField(
            model_name='appointment',
            name='time',
            field=models.TimeField(blank=True, max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='appointment',
            name='vin',
            field=models.CharField(max_length=20),
        ),
    ]