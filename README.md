### CarCar

# Summary
CarCar is a website used to manage the CarCar Dealership. From CarCar's website Employees can register themselves as a new Salesman or new Service Technician. Salesmen have the ability to create new sales, view all previous sales. Technicians have the ability to view all appointments coming up as well as view service history of a specific vehicle by its vin. All CarCar employees have the ability to go and create new vehicles and add them to the dealership inventory. The website includes inventory-api, sales-api, and service-api.

# Home Page
![Home](/images/HomePage.png)

Team:

* Person 1 - Sean Michael McKee - Service
* Person 2 - Olivia Xu - Sales

## Getting Started

# Git:
1. go to the project in git at [here](https://gitlab.com/sjp19-public-resources/sjp-2022-april/project-beta/-/tree/main/)

2. Fork it into a new project, ensuring to make it public.
3. Add the members of your team to the project under Project Information => Members. Set each other member as a Maintainer role.
4. Use `git clone` in the terminal to pull the initial project to your machine.
5. Use `git checkout -b 'branch-name'` to create a new branch to work in.
6. Use `git checkout 'branch-name'` to move to that branch. Ensure it works with git branch.
7. When pushing a worked project to gitlab, use the following commands and ensure any teammates are in redundant communication during this time in order to avoid mishaps:
        (branch-name) $ `git checkout main`  # switch to main branch
        (main) $ `git pull`                  # get latest from remote
        (main) $ `git checkout branch-name`  # switch to dev branch
        (branch-name) $ `git merge main`     # merge latest into dev branch
        ... handle any merging here
        ... test out your code
        (branch-name) $ `git checkout main`  # switch to main branch
        (main) $ `git pull `                 # test for changes on remote
        ... if no changes proceed,
        ... if changes go back to line 3
        (main) $ `git merge branch-name`     # merge dev branch into main
        (main) $ `git push`                  # push changes to the remote
        (main) $ `git checkout branch-name`  # change back to dev branch

# Docker:
1. Use the following commands in the terminal to create and start docker:
        `docker volume create beta-data`
        `docker-compose build`
        `docker-compose up`
2. open Docker desktop and ensure all the containers are running as expected.
Every container has its own terminal, as well as a list of all actions relating to it located in the logs. If access to this is required, simply click on the name for each container and follow the tabs at the top.

**Example:**
To create an automobile, use the POST method at the following URL:
    http://localhost:8100/api/automobiles/

Inside {}, fill out the required fields as defined in models.py.

{
  "color": "red",               # color of automobile
  "year": 2012,                 #year of automobile
  "vin": "1C3CC5FB2AN120174",   #VIN of automobile
  "model_id": 1                 #Model ID of automobile
}

If the required fields are met and Docker is running as it should, this POST request will return a 200 OK status.

## Design
![diagram](/images/Diagram.png)


## Inventory microservice
The Inventory microservice is where the data for automobiles is located.

Models:
Manufacturer - with name as its attribute.
VehicleModel - with name, picture_url, and manufacturer as its attribute.
Automobile - with color, year, VIN, and model as its attributes.

These models are used by the Service microservice in order to attach a specific vehicle to an appointment. Appointments use the VIN to connect the automobile to the service.

## Service microservice
The Service microservice is where the data for appointments and technicians is located.

Models:
There are three models in the Service microservice, located in models.py. After being defined, they are imported into the views.py under service_rest. For any change to the models, use the following commands within either the appropriate Docker terminal or within VS Code's terminal (Accessed by pressing CTRL + ~):
        python manage.py makemigrations
        python manage.py migrate

AutomobileVO - with vin, year, and color as its attributes.
Technician - with technician_name and employee_number as its attributes
Appointment - with vin, customer_name, date (of appointment), time (of appointment), technician, reason (for visit), vip, cancelled, and finished as its attributes.

Views:
There are three encoders and four additional functions in the Service microservice, located in views.py. They are then used within the urls.py.

AutomobileVOEncoder - with the model AutomobileVo and the properties:
        "id",
        "vin",
        "year",
        "color",
TechnicianEncoder - with the model Technician and the properties:
        "id",
        "employee_number",
        "technician_name"
AppointmentEncoder - with the model Appointment and the properties:
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

The following functions are also in the views.py and are directly referenced in the urls.py:
        api_list_technicians - lists all technicians
        api_show_technician - shows a specific technician
        api_list_appointments - lists all upcoming appointments
        api_show_appointment - shows a specific appointment

URLs:
The following urls, located in urls.py are tied directly to the information imported from views.py:
        urlpatterns = [
            path('technicians/', api_list_technicians, name='list_technicians',),
            path("technicians/<int:pk>/", api_show_technician, name="api_show_technician"),
            path('appointments/', api_list_appointments, name='list_appointments'),
            path('appointments/<int:pk>/', api_show_appointment, name='show_appointment'),
        ]

PUT TABLE HERE



## Sales microservice

Sales microservice has four models: **AutomobileVO, Salesman, Customer, and SaleRecord**. Sales polls the inventory for automobile data using a poller. Users can create salesman, customers, and log sale records in the frontend and backend. The AutomobileVO has an availability function with default values as true. *Once the automobile is sold, the availability would be updated to false, and would not be available for create sale records.*

### Sales API

|     Feature      |    Method    |     URL      |
|:-----------------|:-------------|:-------------|
|List all salesman|    GET     |http://localhost:8091/salesman/|
|Create a salesman|    POST    |http://localhost:8091/salesman/|
|List all customers|      GET     |http://localhost:8091/customers/|
|Create a customer|       POST    |http://localhost:8091/customers/|
|List all automobiles|    GET     |http://localhost:8091/automobilevos|
|List all sales records|  GET     |http://localhost:8091/sales/|
|Create a sales record|   POST    |http://localhost:8091/sales/|
