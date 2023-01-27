from django.urls import path
from .views import api_list_technicians, api_show_technician, api_list_appointments, api_show_appointment, api_service_history


urlpatterns = [
    path('technicians/', api_list_technicians, name='list_technicians',),
    path("technicians/<int:pk>/", api_show_technician, name="api_show_technician"),
    path('appointments/', api_list_appointments, name='list_appointments'),
    path('appointments/<int:pk>/', api_show_appointment, name='show_appointment'),
    path('appointments/history/<str:vin>/', api_service_history, name='service_history'),
]
