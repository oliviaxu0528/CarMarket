from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from common.json import ModelEncoder
from .models import AutomobileVO,Salesman,Customer,SaleRecord

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin"]

class SalesmanEncoder(ModelEncoder):
    model = Salesman
    properties = ["id","name","employee_number"]

class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = ["id","name","address","phone_number"]

class SaleRecordEncoder(ModelEncoder):
    model = SaleRecord
    properties = [
        "id",
        "automobile",
        "salesman",
        "customer",
        "sale_price",
    ]
    encoders = {
        "automobile": AutomobileVOEncoder(),
        "salesman": SalesmanEncoder(),
        "customer": CustomerEncoder(),
    }


@require_http_methods(["GET"])
def automobile_vo_list(request):
    if request.method == "GET":
        automobiles = AutomobileVO.objects.all()
        return JsonResponse(
            {"automobiles": automobiles},
            encoder=AutomobileVOEncoder,
            safe=False,
        )

# @require_http_methods(["PUT"])
# def update_automobile_vo(request, vin):
#     if request.method == "PUT":
#         automobile = AutomobileVO.objects.filter(vin=vin).update(sold=True)
#         automobile.save()
#         return JsonResponse(
#                 automobile,
#                 encoder=AutomobileVOEncoder,
#                 safe=False,
#             )

@require_http_methods(["GET", "POST"])
def salesman_list(request):
    if request.method == "GET":
        salesman = Salesman.objects.all()
        return JsonResponse({"salesman": salesman}, encoder=SalesmanEncoder)
    else:
        content = json.loads(request.body)
        salesman = Salesman.objects.create(**content)
        return JsonResponse(
            salesman,
            encoder=SalesmanEncoder,
            safe=False,
        )

@require_http_methods(["GET", "DELETE"])
def salesman_details(request, pk):
    if request.method == "GET":
        salesman = Salesman.objects.get(id=pk)
        return JsonResponse(
            salesman,
            encoder=SalesmanEncoder,
            safe=False,
        )
    else:
        count, _ = Salesman.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def customer_list(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False,
        )

@require_http_methods(["DELETE"])
def customer_delete(request, pk):
    if request.method == "DELETE":
        count, _ = Customer.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def sales_record_list(request):
    if request.method == "GET":
        sales_records = SaleRecord.objects.all()
        return JsonResponse(
            {"sales_records": sales_records},
            encoder=SaleRecordEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        try:
            automobile = AutomobileVO.objects.get(vin=content["automobile"])
            content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid automobile vin"},
                status=400,
                safe=False,
            )
        try:
            salesman = content["sales_person"]
            content["sales_person"] = Salesman.objects.get(name=salesman)
        except Salesman.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid salesman ID"},
                status=400,
            )
        try:
            customer = Customer.objects.get(id=content["customer"])
            content["customer"] = customer
        except Customer.DoesNotExist:
            return JsonResponse({"message": "Invalid customer name"})

        sales_record = SaleRecord.objects.create(**content)
        return JsonResponse(
            sales_record,
            encoder=SaleRecordEncoder,
            safe=False,
        )


@require_http_methods(["DELETE"])
def delete_sales_record(request, pk):
    if request.method == "DELETE":
        count, _ = SaleRecord.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
