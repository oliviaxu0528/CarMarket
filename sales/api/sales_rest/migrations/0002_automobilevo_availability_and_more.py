# Generated by Django 4.0.3 on 2023-01-26 19:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='automobilevo',
            name='availability',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='customer',
            name='phone_number',
            field=models.BigIntegerField(),
        ),
    ]
