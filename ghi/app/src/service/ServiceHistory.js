import React, { useState } from 'react';

function ServiceHistory({appointments, getAppointment}) {
    const [searchVin, setSearchVin] = useState('');
    const [apt, setApt] = useState(appointments);
    const handleSearch = async (event) => {
        if (searchVin.length > 0) {
            event.preventDefault();
            console.log(searchVin, "This is the VIN");
        }
        const filteredAppointments = appointments.filter((appointment) =>
            appointment.vin.includes(searchVin)

        );
        console.log(appointments, "this is the appointments")
        setApt(filteredAppointments);
        console.log(filteredAppointments, "filtered appointments")
    }
    const handleInputChange = async (event) => {
        const value = event.target.value;
        setSearchVin(value);
    };
    if (appointments === undefined) {
      return null;
    }
    return (
        <>
            <form onSubmit={handleSearch} className="input-group">
                <input onChange={handleInputChange} type="search" className="form-control rounded" placeholder="Search VIN" aria-label="Search" aria-describedby="search-addon" />
                <button type="submit" className="btn btn-outline-secondary">Search</button>
            </form>
            <div className=' text-center'>
                <h1 className='mb-3'>Service History</h1>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr className='text-center'>
                        <th>VIN</th>
                        <th>Customer Name</th>
                        <th>Service Date</th>
                        <th>Reason</th>
                        <th>Technician</th>
{/*
                        //         const data = {};
//         data.vin = vin;
//         data.customer_name = customerName;
//         data.starts = starts;
//         data.reason  = reason;
//         data.technician = technician */}
                    </tr>
                </thead>
                <tbody>
                    {apt.map(appointment => {
                        return (
                            <tr key={appointment.id} className='text-center'>
                                <td>{ appointment.vin }</td>
                                <td>{ appointment.customer_name }</td>
                                <td>{ appointment.start}</td>
                                <td>{ appointment.reason }</td>
                                <td>{ appointment.technician.technician_name }</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

export default ServiceHistory;
