import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom"


async function deleteAppointment({getAppointment}, appointment) {
    const appointmentUrl = `http://localhost:8080/api/appointments/${appointment.id}/`
    const fetchConfig = {
        method: "delete",
        headers: {
          'Content-Type': 'application/json',
        },
      };
    // getAppointment()
    await fetch(appointmentUrl, fetchConfig);
    console.log(appointment)


}

function AppointmentList({appointments, getAppointment}) {
    if (appointments === undefined) {
        return null;
    }
    console.log(appointments, "Ooga booga");
    return (
        <table className="table table-striped">
            <thead>
            <tr>
                <th>VIN</th>
                <th>Customer Name</th>
                <th>Date</th>
                <th>Time</th>
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
                    <td>{ appointment.date}</td>
                    <td>{ appointment.time}</td>
                    <td>{ appointment.technician.id }</td>
                    <td>{ appointment.reason }</td>
                    <td>{ appointment.vip }</td>
                    <td>{ appointment.cancelled }</td>
                    <td>{ appointment.finished}</td>
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
