import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MainPage from './MainPage';
import Nav from './Nav';
import TechnicianForm from "./service/TechnicianForm";
import AppointmentForm from "./service/AppointmentForm";
import AppointmentList from "./service/AppointmentList";
import ServiceHistory from "./service/ServiceHistory";
import CustomerForm from "./sales/CustomerForm";
import SalesmanForm from "./sales/SalesmanForm";
import SaleRecordFiltered from "./sales/SaleRecordFiltered";
import SaleRecordList from "./sales/SaleRecordList";
import SaleRecordForm from "./sales/SaleRecordForm";
import CreateAutomobile from './inventory/CreateAutomobile';
import CreateManufacturer from './inventory/CreateManufacturer';
import CreateVehicleModel from './inventory/CreateVehicleModel';
import AutomobileList from './inventory/ListAutomobiles';
import ManufacturersList from './inventory/ListManufacturer';
// import ManufacturerForm from './Inventory/ManufacturerForm';



function App() {

  const [salerecord,setSaleRecord] = useState([]);
  const [salesman, setSalesman] = useState([]);
  const [appointments, setAppointment] = useState([]);
  const [automobile, setAutomobile] = useState([]);
  const [manufacturer, setManufacturer] = useState([]);
  // const [unsold, setUnsold] = useState([]);

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

      console.log(data)
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
    const Url = "	http://localhost:8100/api/manufacturers/"
    const response = await fetch(Url)

    if (response.ok) {
      const data = await response.json()
      setManufacturer(data.manufacturers)
      // setUnsold(data.autos.unsold.filter(auto => auto.availability === true))
    }
  }


    useEffect(() => {
      getManufacturers();
      // fetchModels();
      // fetchCustomer();
      // fetchSales();
      getAutomobile();
      // fetchSalesPerson();
      // fetchTechnician();
      // fetchAppointments();
      getAppointment();
      getSaleRecord();
      getSalesman();
    },[]);

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          {/* <Route path="automobiles/list" element={<ListAutomobiles />} />
          <Route path="manufacturers/list" element={<ListManufacturer/>} />
          {/* <Route path="technicians/create" element={<TechnicianForm />} /> */}
          <Route path="appointments/create" element={<AppointmentForm />} />
          <Route path="appointments/list" element={<AppointmentList appointments={appointments} getAppointment={getAppointment} />} />
          {/* <Route index element={<AppointmentList appointments={appointments} getAppointment={getAppointment} />} /> */}
          {/* <Route path="appointments/history" element={<ServiceHistory />} /> */}
          <Route path="/" element={<MainPage />} />
          <Route path="sales">
            <Route path="" element={<SaleRecordList salerecord={salerecord}/>} />
            <Route path="new" element={<SaleRecordForm />} />
          </Route>
          <Route path="customers/new" element={<CustomerForm/>} />
          <Route path="salesman">
            <Route path="new" element={<SalesmanForm />} />
            <Route path="list" element={<SaleRecordFiltered salesman={salesman} salerecord={salerecord}/>} />
          </Route>
          <Route path="manufacturers">
            <Route path="create" element={<CreateManufacturer />} />
            {/* <Route path="list" element={<ManufacturersList manufacturer={manufacturer}/>} /> */}
          </Route>
          <Route path="vehiclemodels">
            <Route path="create" element={<CreateVehicleModel />} />
            {/* <Route path="list" element={<SaleRecordFiltered salesman={salesman} salerecord={salerecord}/>} /> */}
          </Route>
          <Route path="automobiles">
            <Route path="create" element={<CreateAutomobile />} />
            <Route path="list" element={<AutomobileList automobile={automobile}/>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
