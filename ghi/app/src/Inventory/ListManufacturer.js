import React, {useEffect, useState} from 'react';

function AppointmentList({appointments, getAppointment}) {
    if (appointments === undefined) {
        return null;
    }
    async function deleteAppointment(appointment) {
        const appointmentUrl = `http://localhost:8080/api/appointments/${appointment.id}/`
        const fetchConfig = {
            method: "delete",
            headers: {
              'Content-Type': 'application/json',
            },
          };
        await fetch(appointmentUrl, fetchConfig);
        getAppointment()
    }
    return (
        <table className="table table-striped">
            <thead>
            <tr>
                <th>VIN</th>
                <th>Customer Name</th>
                <th>Date</th>
                <th>Technician</th>
                <th>Reason For Visit</th>
                <th>VIP</th>
                <th>Cancelled</th>
                <th>Finished</th>
            </tr>
            </thead>
            <tbody>
            {appointments.map(appointment => {
                return (
                <tr key={appointment.id}>
                    <td>{ appointment.vin}</td>
                    <td>{ appointment.customer_name}</td>
                    <td>{ appointment.start}</td>
                    <td>{ appointment.technician.id }</td>
                    <td>{ appointment.reason }</td>
                    <td>{ String(appointment.vip) }</td>
                    <td>{ String(appointment.cancelled) }</td>
                    <td>{ String(appointment.finished) }</td>
                    <td><button type="button" className="btn btn-danger" onClick={() => deleteAppointment(appointment)}>Delete</button>
                    </td>
                </tr>
                );
            })}
            </tbody>
        </table>
    );
}




export default AppointmentList;
