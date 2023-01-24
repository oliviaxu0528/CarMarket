from django.core.exceptions import ObjectDoesNotExist
from django.db import models
from django.urls import reverse

class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    vin = models.CharField(max_length=17, unique=True)
    def __str__(self):
        return self.vin

class Salesman(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.PositiveIntegerField()

    def __str__(self):
        return self.name


class Customer(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    phone_number = models.PositiveIntegerField()

    def __str__(self):
        return self.name


class SaleRecord(models.Model):

    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="SaleRecord",
        on_delete=models.CASCADE,
    )

    salesman = models.ForeignKey(
        Salesman,
        related_name="SaleRecord",
        on_delete=models.CASCADE,
    )

    customer = models.ForeignKey(
        Customer,
        related_name="SaleRecord",
        on_delete=models.CASCADE,
    )

    sale_price=models.PositiveIntegerField()

    def __str__(self):
        return self.automobile.vin
