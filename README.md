# CarCar

## Summary
CarCar is a website used to manage the CarCar Dealership. From CarCar's website Employees can register themselves as a new Salesman or new Service Technician. Salesmen have the ability to create new sales, view all previous sales. Technicians have the ability to view all appointments coming up as well as view service history of a specific vehicle by its vin. All CarCar employees have the ability to go and create new vehicles and add them to the dealership inventory. The website includes inventory-api, sales-api, and service-api.

## Home Page
![Home](/images/HomePage.png)

## Getting Started
# Git:
1. go to the project in git at [here](https://gitlab.com/sjp19-public-resources/sjp-2022-april/project-beta/-/tree/main/)
2. Fork it into a new project, ensuring to make it public.
3. Add the members of your team to the project under Project Information => Members. Set each other member as a Maintainer role.
4. Use `git clone` in the terminal to pull the initial project to your machine.

## Docker:
1. Use the following commands in the terminal to create and start docker:
       1. `docker volume create beta-data`
       2.  `docker-compose build`
       3.  `docker-compose up`
2. open Docker desktop and ensure all the containers are **running** as expected(example as below).
![Docker](/images/Docker.png)

* Every container has its own terminal, as well as a list of all actions relating to it located in the logs. If access to this is required, simply click on the GreenBOX with name for each container.

## Design
![diagram](/images/Diagram.png)

## Inventory microservice
The Inventory microservice is where the data for automobiles is located.
**Models:**
* **Manufacturer**- with *name* as its attribute.
* **VehicleModel** - with *name, picture_url, and manufacturer* as its attribute.
* **Automobile** - with *color, year, VIN, and model* as its attributes.
These models are used by the Service microservice in order to attach a specific vehicle to an appointment.
    * In Services API, Appointments use the VIN to connect the automobile to the service.
    * In Sales API, new sale form fetchs automobile data, created automobievo, which includes the availablility property, and the form would only populated the available for sale automobile in the dropdown list.

## Inventory API
|     Feature      |    Method    |     URL      |
|:-----------------|:-------------|:-------------|
|List all manufacturers|    GET     |http://localhost:8100/api/manufacturers|
|Create a manufacturer|    POST    |http://localhost:8100/api/manufacturers|
|List all vehicle models|      GET     |http://localhost:8100/api/models/|
|Create a vehicle model|       POST    |http://localhost:8100/api/models/|
|List all sales records|  GET     |http://localhost:8100/api/automobiles/|
|Create a sales record|   POST    |http://localhost:8100/api/automobiles/|

## Example POST request:
**POST New Manufacturer**

```
{
	"name": "tesla"
}
```


**POST New Vehicle Model**
```
{
        "name": "tom",
        "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
        "manufacturer_id": 1
}
```

**POST New Sale**
```
{
        "color": "blue",
        "year": 1993,
        "vin": "11111111",
        "model_id":1
}
```



## Service microservice
The Service microservice is where the data for appointments and technicians is located.
* Models:
There are three models in the Service microservice, located in models.py. After being defined, they are imported into the views.py under service_rest. For any change to the models, use the following commands within either the appropriate Docker terminal or within VS Code's terminal (Accessed by pressing CTRL + ~):
        python manage.py makemigrations
        python manage.py migrate
* AutomobileVO - with vin, year, and color as its attributes.
* Technician - with technician_name and employee_number as its attributes
* Appointment - with vin, customer_name, date (of appointment), time (of appointment), technician, reason (for visit), vip, cancelled, and finished as its attributes.
* Views:
There are three encoders and four additional functions in the Service microservice, located in views.py. They are then used within the urls.py.
* AutomobileVOEncoder - with the model AutomobileVo and the properties:
        "id",
        "vin",
        "year",
        "color",
* TechnicianEncoder - with the model Technician and the properties:
        "id",
        "employee_number",
        "technician_name"
* AppointmentEncoder - with the model Appointment and the properties:
        "id",
        "vin",
        "customer_name",
        "date",
        "time",
        "technician",
        "reason",
        "vip",
        "cancelled",
        "finished"
* The following functions are also in the views.py and are directly referenced in the urls.py:
        api_list_technicians - lists all technicians
        api_show_technician - shows a specific technician
        api_list_appointments - lists all upcoming appointments
        api_show_appointment - shows a specific appointment
* URLs:
The following urls, located in urls.py are tied directly to the information imported from views.py:
        urlpatterns = [
            path('technicians/', api_list_technicians, name='list_technicians',),
            path("technicians/<int:pk>/", api_show_technician, name="api_show_technician"),
            path('appointments/', api_list_appointments, name='list_appointments'),
            path('appointments/<int:pk>/', api_show_appointment, name='show_appointment'),
        ]

## Service API
|     Feature      |    Method    |     URL      |
|:-----------------|:-------------|:-------------|
|List all technicians|    GET     |http://localhost:8080/api/technicians|
|Create a technician|    POST    |http://localhost:8080/api/technicians|
|List all appointments|      GET     |http://localhost:8080/api/appointments|
|Create an appointment|       POST    |http://localhost:8080/api/appointments|
|Show Service History|    GET     |http://localhost:8080/api/appointments|

## Example POST request:
**POST New Appointment**
```
{
        "vin": "11111111",
        "customer_name": "Helen",
        "start": "2022-09-20T21:49:45+00:00",
        "technician": "Batman",
        "reason": "darn thing just won't run",
        "vip": true,
        "cancelled": false,
        "finished": true
}
```
**POST New Technician**
```
{
        "employee_number": 5,
        "technician_name": "Poison Ivy"
}
```
## Sales microservice
Sales microservice has four models: **AutomobileVO, Salesman, Customer, and SaleRecord**. Sales polls the inventory for automobile data using a poller. Users can create salesman, customers, and log sale records in the frontend and backend. The AutomobileVO has an availability function with default values as true. **Once the automobile is sold, the availability would be updated to false, thus it would not be available for create new sale records.**

## Sales API
|     Feature      |    Method    |     URL      |
|:-----------------|:-------------|:-------------|
|List all salesman|    GET     |http://localhost:8091/salesman|
|Create a salesman|    POST    |http://localhost:8091/salesman|
|List all customers|      GET     |http://localhost:8091/customers|
|Create a customer|       POST    |http://localhost:8091/customers|
|List all automobiles|    GET     |http://localhost:8091/automobilevos|
|List all sales records|  GET     |http://localhost:8091/sales|
|Create a sales record|   POST    |http://localhost:8091/sales|

## Example POST request:
**POST New Customer**
```
{
	"name": "wendy",
        "address": "130 Ave, millbrae, ca,94012",
        "phone_number": 12013
}
```


**POST New Customer**
```
{
	"name":"alex",
	"employee_number": 2
}
```

**POST New Sale**
```
{
	"automobile":"11111111",
	"salesman":"alex",
	"customer":"wendy",
	"sale_price": 45000
}
```