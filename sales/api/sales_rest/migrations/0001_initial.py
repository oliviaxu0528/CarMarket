# Generated by Django 4.0.3 on 2023-01-24 01:20

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
                ('import_href', models.CharField(max_length=200, unique=True)),
                ('vin', models.CharField(max_length=17, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('address', models.CharField(max_length=200)),
                ('phone_number', models.PositiveIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Salesman',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('employee_number', models.PositiveIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='SaleRecord',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sale_price', models.PositiveIntegerField()),
                ('automobile', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='SaleRecord', to='sales_rest.automobilevo')),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='SaleRecord', to='sales_rest.customer')),
                ('salesman', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='SaleRecord', to='sales_rest.salesman')),
            ],
        ),
    ]