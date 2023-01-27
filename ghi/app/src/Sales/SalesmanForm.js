import React, {useEffect, useState} from 'react'

function SalesmanForm() {

const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {};
    data.name = name;
    data.employee_number = employee_number;

    const Url = "http://localhost:8091/salesman/";
    const fetchConfig = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(Url, fetchConfig);
    if (response.ok) {
      const newData = await response.json();
      setName("");
      setEmployeeNumber("");
    }
  }

    const [name, setName] = useState('');
    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }

    const [employee_number, setEmployeeNumber] = useState('');
    const handleEmployeeNumberChange = (event) => {
        const value = event.target.value;
        setEmployeeNumber(value);
    }

  return (
    <div className="row">
        <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
            <h1>Add a Salesman!</h1>
            <form onSubmit={handleSubmit} id="create-employee-form">
            <div className="form-floating mb-3">
                <input value={name} onChange={handleNameChange} placeholder="Name" required type="text" name="name" id="name" className="form-control"/>
                <label htmlFor="name">Name</label>
            </div>
            <div className="form-floating mb-3">
                <input value={employee_number} onChange={handleEmployeeNumberChange} placeholder="Phone Number" required type="text" name="employee_number" id="employee_number" className="form-control"/>
                <label htmlFor="employee_number">Phone Number</label>
            </div>
            <button className="btn btn-primary">Create</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default SalesmanForm;
