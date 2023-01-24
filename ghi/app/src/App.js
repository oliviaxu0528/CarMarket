import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import TechnicianForm from "./services/TechnicianForm";
import AppointmentForm from "./services/AppointmentForm";
import AppointmentsList from "./services/AppointmentsList";
import ServiceHistory from "./services/ServicesHistory";



function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="technicians/create" element={<TechnicianForm />} />
          <Route path="appointments/create" element={<AppointmentForm />} />
          <Route path="appointments/list" element={<AppointmentsList />} />
          <Route path="appointments/history" element={<ServiceHistory />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
