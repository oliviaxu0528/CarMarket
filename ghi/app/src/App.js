import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MainPage from './MainPage';
import Nav from './Nav';
import TechnicianForm from "./service/TechnicianForm";
import AppointmentForm from "./service/AppointmentForm";
import AppointmentList from "./service/AppointmentList";
import ServiceHistory from "./service/ServiceHistory";
// import ListAutomobiles from './Inventory/ListAutomobiles';
// import ListManufacturer from './Inventory/ListManufacturer';
// import ManufacturerForm from './Inventory/ManufacturerForm';



function App(props) {
  const [appointments, setAppointment] = useState([])

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
//  on delete something getAppointment
  useEffect(() => {
    getAppointment();

  }, [])
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          {/* <Route path="automobiles/list" element={<ListAutomobiles />} />
          <Route path="manufacturers/list" element={<ListManufacturer/>} />
          <Route path="manufacturers/create" element={<ManufacturerForm />} /> */}
          {/* <Route path="technicians/create" element={<TechnicianForm />} /> */}
          <Route path="appointments/create" element={<AppointmentForm />} />
          <Route path="appointments/list" element={<AppointmentList appointments={appointments} getAppointment={getAppointment} />} />
          {/* <Route index element={<AppointmentList appointments={appointments} getAppointment={getAppointment} />} /> */}
          {/* <Route path="appointments/history" element={<ServiceHistory />} /> */}
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
