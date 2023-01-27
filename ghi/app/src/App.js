import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MainPage from './MainPage';
import Nav from './Nav';
import TechnicianForm from "./service/TechnicianForm";
import AppointmentForm from "./service/AppointmentForm";
import AppointmentList from "./service/AppointmentList";
import ServiceHistory from "./service/ServiceHistory";
import CustomerForm from "./Sales/CustomerForm";
import SalesmanForm from "./Sales/SalesmanForm";
import SaleRecordFiltered from "./Sales/SaleRecordFiltered";
import SaleRecordList from "./Sales/SaleRecordList";
import SaleRecordForm from "./Sales/SaleRecordForm";
import CreateAutomobile from './Inventory/CreateAutomobile';
import CreateManufacturer from './Inventory/CreateManufacturer';
import CreateVehicleModel from './Inventory/CreateVehicleModel';
import AutomobileList from './Inventory/ListAutomobiles';
import ManufacturersList from './Inventory/ListManufacturer';
import ModelList from './Inventory/ListVehicleModel';

function App() {
  const [salerecord,setSaleRecord] = useState([]);
  const [salesman, setSalesman] = useState([]);
  const [appointments, setAppointment] = useState([]);
  const [automobile, setAutomobile] = useState([]);
  const [manufacturer, setManufacturer] = useState([]);
  const [model, setModel] = useState([]);

  const getSaleRecord = async () => {
    const url = "http://localhost:8091/sales/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setSaleRecord(data.salerecords)
    }
  }

  const getSalesman = async () => {
    const salespersonUrl = "http://localhost:8091/salesman/"
    const response = await fetch(salespersonUrl)

    if (response.ok) {
      const data = await response.json()
      const salesman = data.salesman
      setSalesman(salesman)
    }
  }
  const getAppointment = async () => {
    const url = "http://localhost:8080/api/appointments/"
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      const appointments = data.appointments
      setAppointment(appointments)
    }
  }

  const getAutomobile = async () => {
    const Url = "http://localhost:8100/api/automobiles/"
    const response = await fetch(Url)
    if (response.ok) {
      const data = await response.json()
      setAutomobile(data.autos)
    }
  }

  const getManufacturers = async () => {
    const Url = "http://localhost:8100/api/manufacturers/"
    const response = await fetch(Url)
    if (response.ok) {
      const data = await response.json()
      setManufacturer(data.manufacturers)
    }
  }
  const getModel = async () => {
    const Url = "http://localhost:8100/api/models/"
    const response = await fetch(Url)
    if (response.ok) {
      const data = await response.json()
      setModel(data.models)
    }
  }

    useEffect(() => {
      getManufacturers();
      getModel();
      getAutomobile();
      getAppointment();
      getSaleRecord();
      getSalesman();
    },[]);

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="technicians/create" element={<TechnicianForm />} />
          <Route path="appointments/create" element={<AppointmentForm />} />
          <Route path="appointments/list" element={<AppointmentList appointments={appointments} getAppointment={getAppointment} />} />
          <Route path="appointments/history" element={<ServiceHistory appointments={appointments} getAppointment={getAppointment} />} />
          <Route path="/" element={<MainPage />} />
          <Route path="customers/new" element={<CustomerForm/>} />
          <Route path="sales">
            <Route path="" element={<SaleRecordList salerecord={salerecord} getSaleRecord={getSaleRecord}/>} />
            <Route path="new" element={<SaleRecordForm getSaleRecord={getSaleRecord}/>} />
          </Route>
          <Route path="salesman">
            <Route path="new" element={<SalesmanForm />} />
            <Route path="list" element={<SaleRecordFiltered salesman={salesman} salerecord={salerecord}/>} />
          </Route>
          <Route path="manufacturers">
            <Route path="create" element={<CreateManufacturer getManufacturers={getManufacturers}/>} />
            <Route path="list" element={<ManufacturersList manufacturer={manufacturer} getManufacturers={getManufacturers}/>} />
          </Route>
          <Route path="vehiclemodels">
            <Route path="create" element={<CreateVehicleModel getModel={getModel}/>} />
            <Route path="list" element={<ModelList model={model} getModel={getModel}/>} />
          </Route>
          <Route path="automobiles">
            <Route path="create" element={<CreateAutomobile getAutomobile={getAutomobile}/>} />
            <Route path="list" element={<AutomobileList automobile={automobile} getAutomobile={getAutomobile}/>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
