from django.urls import path

from .views import (
    automobilevo,
    automobilevos,
    salesman_list,
    salesman_details,
    customer_list,
    customer_delete,
    sales_record_list,
    delete_sales_record,
)

urlpatterns = [
    path("automobilevo/<int:vin>/", automobilevo, name="automobilevo"),
    path("automobilevos/", automobilevos, name="automobilevos"),
    path("salesman/", salesman_list, name="salesman_list"),
    path("salesman/<int:pk>/", salesman_details, name="salesman_details"),
    path("customers/", customer_list, name="customer_list"),
    path("customers/<int:pk>/", customer_delete, name="customer_delete"),
    path("sales/", sales_record_list, name="sales_record_list"),
    path("sales/<int:pk>/", delete_sales_record, name="delete_sales_record"),
]