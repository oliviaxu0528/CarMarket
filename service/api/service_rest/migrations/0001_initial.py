# Generated by Django 4.0.3 on 2023-01-24 19:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AutomobileVO',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vin', models.CharField(max_length=17, unique=True)),
                ('year', models.PositiveSmallIntegerField()),
                ('color', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Technician',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('technician_name', models.CharField(max_length=100)),
                ('employee_number', models.PositiveSmallIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vin', models.PositiveSmallIntegerField()),
                ('owner_name', models.CharField(max_length=200)),
                ('appointment_date', models.DateTimeField()),
                ('reason_for_visit', models.CharField(max_length=200)),
                ('vip', models.BooleanField(default=False)),
                ('canceled', models.BooleanField(default=False)),
                ('finished', models.BooleanField(default=False)),
                ('assigned_technician', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='appointments', to='service_rest.technician')),
            ],
        ),
    ]
