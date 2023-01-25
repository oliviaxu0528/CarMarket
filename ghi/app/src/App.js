import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import TechnicianForm from "./service/TechnicianForm";
import AppointmentForm from "./service/AppointmentForm";
import AppointmentList from "./service/AppointmentList";
import ServiceHistory from "./service/ServiceHistory";



function App() {
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default CustomerForm;
