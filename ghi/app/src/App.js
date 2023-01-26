import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import React, { useEffect, useState} from 'react';
import CreateAutomobile from './Inventory/CreateAutomobile';
import CreateManufacturer from './Inventory/CreateManufacturer';
import CreateVehicleModel from './Inventory/CreateVehicleModel';


function App() {

  const [salerecord,setSaleRecord] = useState([]);
  const [salesman, setSalesman] = useState([]);

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

  useEffect(() => {
    // fetchManufacturers();
    // fetchModels();
    // fetchCustomer();
    // fetchSales();
    // fetchAutomobile();
    // fetchSalesPerson();
    // fetchTechnician();
    // fetchAppointments();
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
          <Route path="appointments/list" element={<AppointmentList />} />
          <Route path="appointments/history" element={<ServiceHistory />} />
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
            {/* <Route path="list" element={<SaleRecordFiltered salesman={salesman} salerecord={salerecord}/>} /> */}
          </Route>
          <Route path="vehiclemodels">
            <Route path="create" element={<CreateVehicleModel />} />
            {/* <Route path="list" element={<SaleRecordFiltered salesman={salesman} salerecord={salerecord}/>} /> */}
          </Route>
          <Route path="automobiles">
            <Route path="create" element={<CreateAutomobile />} />
            {/* <Route path="list" element={<SaleRecordFiltered salesman={salesman} salerecord={salerecord}/>} /> */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
