import React, {useEffect, useState} from 'react'

function CreateVehicleModel(props) {
    const [vehicleName, setVehicleName] = useState('')
    const [pictureUrl, setPicture] = useState('')
    const [manufacturer, setManufacturer] = useState('')
    const [manufacturers, setManufacturers] = useState([])

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.name = vehicleName;
        data.picture_url = pictureUrl;
        data.manufacturer_id = manufacturer;
        const VehicleUrl = `http://localhost:8100/api/models/`
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(VehicleUrl, fetchConfig);
        if (response.ok) {
            const newVehicle = await response.json();
            setVehicleName('');
            setPicture('');
            setManufacturer('');
            props.getModel();

        }
      }

    const handleVehicleNameChange = (event) => {
          const value = event.target.value;
          setVehicleName(value);
      }

    const handlePictureChange = (event) => {
        const value = event.target.value;
        setPicture(value);
    }

    const handleManufacturerChange = (event) => {
        const value = event.target.value;
        setManufacturer(value);
    }

    const fetchData = async () => {
    const ManufacturersUrl = `http://localhost:8100/api/manufacturers/`;

    const response = await fetch(ManufacturersUrl);

    if (response.ok) {
      const data = await response.json();
      setManufacturers(data.manufacturers)
    }
  }

  useEffect(() => {
     fetchData();
  }, []);

return (
    <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Create a vehicle model</h1>
                <form onSubmit={handleSubmit} id="create-conference-form">
                <div className="form-floating mb-3">
                  <input onChange={handleVehicleNameChange} value={vehicleName} placeholder="vehicle name" required type="text" name="vehicleName" id="vehicleName" className="form-control" />
                  <label htmlFor="vehicleNameChange">Vehicle Name</label>
                </div>
                  <div className="form-floating mb-3">
                    <input onChange={handlePictureChange} value={pictureUrl} placeholder="Vehicle picture" required name="vehiclePicture" id="vehicle_picture" className="form-control" />
                    <label htmlFor="vehiclePicture">Vehicle Image URL</label>
                  </div>
                  <div className="mb-3">
                    <select onChange={handleManufacturerChange} value={manufacturer} required name="manufacturers" id="ManList" className="form-select">
                        <option value="">Choose Manufacturer</option>
                        {manufacturers.map(manufacturer => {
                            return (
                                <option key={manufacturer.id} value={manufacturer.id}>
                                    {manufacturer.name}
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

export default CreateVehicleModel;
