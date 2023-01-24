from django.db import models
from django.urls import reverse


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    year = models.PositiveSmallIntegerField()
    color = models.CharField(max_length=50)

    def get_api_url(self):
        return reverse("api_automobile", kwargs={"pk": self.id})



class Technician(models.Model):
    technician_name = models.CharField(max_length=200)
    employee_number = models.PositiveSmallIntegerField()

    def get_api_url(self):
        return reverse("api_show_technician", kwargs={"pk": self.id})

    def __str__(self):
        return f"{self.technician_name} | {self.employee_number}"


class Appointment(models.Model):
    vin = models.PositiveSmallIntegerField()
    owner_name = models.CharField(max_length=200)
    appointment_date = models.DateTimeField()
    assigned_technician = models.ForeignKey(
    Technician,
    related_name="appointments",
    on_delete=models.CASCADE,)
    reason_for_visit = models.CharField(max_length=200)
    vip = models.BooleanField(default=False)
    canceled = models.BooleanField(default=False)
    finished = models.BooleanField(default=False)

    def get_api_url(self):
        return reverse("api_show_appointment", kwargs={"pk": self.id})
