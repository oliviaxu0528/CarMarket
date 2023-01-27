import React, {useEffect, useState} from 'react';

function AppointmentForm() {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.vin = vin;
        data.customer_name = customerName;
        data.start= start;
        data.reason = reason;
        data.technician = technician;

        console.log(data);

        const appointmentsUrl = 'http://localhost:8080/api/appointments/';
        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const response = await fetch(appointmentsUrl, fetchConfig);
        if (response.ok) {
          const newAppointment = await response.json();
          console.log(newAppointment);

          setVin('');
          setCustomerName('');
          setStart('');
          setReason('');
          setTechnician('');

        }
    }


  const [vin, setVin] = useState('');
  const handleVin = (event) => {
    const value = event.target.value;
    setVin(value);
  }

  const [customerName, setCustomerName] = useState('');
  const handleCustomerName = (event) => {
    const value = event.target.value;
    setCustomerName(value);
  }

  const [start, setStart] = useState('');
  const handleStart = (event) => {
    const value = event.target.value;
    setStart(value);
  }

//   const [startTime, setStartTime] = useState('');
//   const handleStartTime = (event) => {
//     const value = event.target.value;
//     setStartDate(value);
//   }


  const [reason, setReason] = useState('');
  const handleReason = (event) => {
    const value = event.target.value;
    setReason(value);
  }

  const [technician, setTechnician] = useState('');
  const handleTechnician = (event) => {
    const value = event.target.value;
    setTechnician(value);
  }


  const [technicians, setTechnicians] = useState([]);
  const fetchTechnicians = async () => {

    const techniciansUrl = 'http://localhost:8080/api/technicians/';

    const response = await fetch(techniciansUrl);

    if (response.ok) {
      const techniciansData = await response.json();
      setTechnicians(techniciansData.technicians)
    }
  }

  useEffect(() => {
    fetchTechnicians();
  }, []);


return (
    <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Create an Appointment</h1>
                <form onSubmit={handleSubmit} id="create-appointment-form">
                    <div className="form-floating mb-3">
                        <input onChange={handleVin} value={vin} placeholder="vin" required type="text" name="vin" id="vin" className="form-control" />
                        <label htmlFor="vin"> Vehicle VIN</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={handleCustomerName} value={customerName} placeholder="Customer Name" required type="text" name="customer_name" id="customer_name" className="form-control" />
                        <label htmlFor="customer_name">Customer Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={handleStart} value={start} placeholder="Start" required type="datetime-local" name="start" id="start" className="form-control" />
                        <label htmlFor="start">Date</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={handleReason} value={reason} placeholder="reason" required type="text" name="reason" id="reason" className="form-control" />
                        <label htmlFor="reason">Reason</label>
                    </div>
                    <select onChange={handleTechnician} value={technician} required id="technician" name="technician" className="form-select">
                        <option value="">Choose a technician</option>
                        {technicians.map(technician => {
                            return (
                                <option key={technician.id} value={technician.technician_name}>
                                    {technician.technician_name}
                                </option>
                            );
                        })}
                    </select>
                    <button className="btn btn-primary">Create</button>
                </form>
            </div>
        </div>
    </div>
);
}

export default AppointmentForm;
