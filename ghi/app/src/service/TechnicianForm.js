import React, {useEffect, useState} from 'react';

function TechnicianForm() {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.technician_name = technicianName;
        data.employee_number = employeeNumber;

        console.log(data);

        const technicianUrl = 'http://localhost:8080/api/technicians/';
        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const response = await fetch(technicianUrl, fetchConfig);
        if (response.ok) {
          const newTechnician = await response.json();
          console.log(newTechnician);

          setTechnicianName('');
          setEmployeeNumber('');

        }
    }

  const [technicianName, setTechnicianName] = useState('');
  const handleTechnicianName = (event) => {
    const value = event.target.value;
    setTechnicianName(value);
  }

  const [employeeNumber, setEmployeeNumber] = useState('');
  const handleEmployeeNumber = (event) => {
    const value = event.target.value;
    setEmployeeNumber(value);
  }
  

  // useEffect(() => {
  //   fetchTechnicians();
  // }, []);


return (
    <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Create a Technician</h1>
                <form onSubmit={handleSubmit} id="create-technician-form">
                    <div className="form-floating mb-3">
                        <input onChange={handleTechnicianName} value={technicianName} placeholder="Technician Name" required type="text" name="technicianName" id="technicianName" className="form-control" />
                        <label htmlFor="vin">Technician Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={handleEmployeeNumber} value={employeeNumber} placeholder="Employee Number" required type="text" name="employeeNumber" id="employeeNumber" className="form-control" />
                        <label htmlFor="employee_number">Employee Number</label>
                    </div>
                    <button className="btn btn-primary">Create</button>
                </form>
            </div>
        </div>
    </div>
);
}

export default TechnicianForm;
