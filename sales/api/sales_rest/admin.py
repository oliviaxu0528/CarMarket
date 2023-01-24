from django.contrib import admin

# Register your models here.
from .models import AutomobileVO, Salesman, Customer, SaleRecord

@admin.register(AutomobileVO)
class AutomobileVOadmin(admin.ModelAdmin):
    pass

@admin.register(Salesman)
class Salesmanadmin(admin.ModelAdmin):
    pass

@admin.register(Customer)
class Customeradmin(admin.ModelAdmin):
    pass

@admin.register(SaleRecord)
class SaleRecordadmin(admin.ModelAdmin):
    pass
