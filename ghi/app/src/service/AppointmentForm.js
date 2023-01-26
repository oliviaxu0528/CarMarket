
import React, {useEffect, useState} from 'react';

function AppointmentForm() {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.vin = vin;
        data.customer_name = customer_name;
        data.start_date = start_date;
        data.start_time = start_time;
        data.reason = reason;
        data.technician = technician;
        data.vip = vip;

        console.log(data);

        const apointmentUrl = 'http://localhost:8080/api/appointments/';
        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const response = await fetch(apointmentUrl, fetchConfig);
        if (response.ok) {
          const newAppointment = await response.json();
          console.log(newAppointment);

          setVin('');
          setCustomerName('');
          setStartDate('');
          setStartTime('');
          setReason('');
          setTechnician('');
          setVIP('');
        }
    }



  const [vin, setVin] = useState('');
  const handleVin = (event) => {
    const value = event.target.value;
    setVin(value);
  }

  const [customer_name, setCustomerName] = useState('');
  const handleCustomerName = (event) => {
    const value = event.target.value;
    setCustomerName(value);
  }

  const [start_date, setStartDate] = useState('');
  const handleStartDate = (event) => {
    const value = event.target.value;
    setStartDate(value);
  }

  const [start_time, setStartTime] = useState('');
  const handleStartTime = (event) => {
    const value = event.target.value;
    setStartTime(value);
  }

  const [reason, setReason] = useState('');
  const handleReason = (event) => {
    const value = event.target.value;
    setReason(value);
  }

  const [vip, setVIP] = useState('');
  const handleVIP = (event) => {
    const value = event.target.value;
    setVIP(value);
  }

  const [technician, setTechnician] = useState('');
  const handleTechnician = (event) => {
    const value = event.target.value;
    setTechnician(value);
  }


  const [technicians, setTechnicians] = useState([]);
  const fetchData = async () => {
    const url = 'http://localhost:8080/api/technicians/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setTechnicians(data.technicians)
    }
  }
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="row">
    <div className="offset-3 col-6">
      <div className="shadow p-4 mt-4">
        <h1>Create A New Appointment</h1>
        <form onSubmit={handleSubmit} id="create-conference-form">
        <div className="form-floating mb-3">
            <input onChange={handleVin} value={vin} placeholder="VIN" required type="text" name="vin" id="vin" className="form-control" />
            <label htmlFor="style_name">VIN</label>
          </div>
          <div className="form-floating mb-3">
            <input onChange={handleCustomerName} value={customer_name} placeholder="CustomerName" required type="text" name="customer_name" id="customer_name" className="form-control" />
            <label htmlFor="customer_name">Customer Name</label>
          </div>
          <div className="form-floating mb-3">
            <input onChange={handleStartDate} value={start_date} placeholder="StartDate" required type="datetime-local" name="start_date" id="start_date" className="form-control" />
            <label htmlFor="start_date">Start Date</label>
          </div>
          <div className="form-floating mb-3">
            <input onChange={handleStartTime} value={start_time} placeholder="StartTime" required type="datetime-local" name="start_time" id="start_time" className="form-control" />
            <label htmlFor="start_time">Start Time</label>
          </div>
          <div className="form-floating mb-3">
            <input onChange={handleReason} value={reason} placeholder="Reason" required type="text" name="reason" id="reason" className="form-control" />
            <label htmlFor="reason">Reason For Visit</label>
          </div>
          <div className="form-floating mb-3">
            <input onChange={handleVIP} value={vip} placeholder="VIP" required type= "text" name="vip" id="vip" className="form-select" >SOMETHING</input>
            </div>
          <div className="mb-3">
            <select onChange={handleTechnician} required name="technician_name" id="technician" className="form-select">
                <option value="">Technician</option>
                {technicians.map(technician => {
                    return (
                        <option key={technician.href} value={technician.id}>
                        {technician}
                        </option>
                    );
                })}
            </select>
          </div>
          <button className="btn btn-primary">Create</button>
        </form>
      </div>
    </div>
  </div>
  );
}

export default AppointmentForm;
