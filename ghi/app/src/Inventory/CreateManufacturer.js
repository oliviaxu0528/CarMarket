import React, {useEffect, useState} from 'react'

function CreateManufacturer() {

const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    data.name = name;
    console.log(data);

    const url = "http://localhost:8100/api/manufacturers/";
    const fetchConfig = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      const newData = await response.json();
      console.log(newData);
      setName("");
    }
  }

    const [name, setName] = useState('');
    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }

  return (
    <div className="row">
        <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
            <h1>Add a Manufacturer!</h1>
            <form onSubmit={handleSubmit} id="create-customer-form">
            <div className="form-floating mb-3">
                <input value={name} onChange={handleNameChange} placeholder="Name" required type="text" name="name" id="name" className="form-control"/>
                <label htmlFor="name">Name</label>
            </div>
            <button className="btn btn-primary">Create</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default CreateManufacturer;