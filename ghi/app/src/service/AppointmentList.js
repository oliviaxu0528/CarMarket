import React from "react";


class AppointmentsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
      vins: [],
    };
    this.handleCancel = this.handleCancel.bind(this);
    this.handleFinish = this.handleFinish.bind(this);
  }

  async componentDidMount() {
    this.loadAppt();
  }


  async loadAppt() {
    const apptResponse = await fetch("http://localhost:8080/api/appointments/");
    if (apptResponse.ok) {
      const apptData = await apptResponse.json();
      let appointments = [];
      for (let appt of apptData.appointments) {
        if (appt.finished === false) {
          appointments.push(appt);
        }
      }
      this.setState({ appointments: appointments });
    } else {
      console.error("apptData:", apptResponse);
    }
  }


  async handleCancel(event) {
    event.preventDefault();
    const id = event.target.value;
    const cancelUrl = `http://localhost:8080/api/appointments/${id}/`;
    const fetchConfig = {
      method: "DELETE",
    };
    const response = await fetch(cancelUrl, fetchConfig);
    if (response.ok) {
      this.loadAppt();
    }
  }


  async handleFinish(event) {
    event.preventDefault();
    const id = event.target.value;
    const finishUrl = `http://localhost:8080/api/appointments/${id}/`;
    const fetchConfig = {
      method: "DELETE",
    };
    const response = await fetch(finishUrl, fetchConfig);
    if (response.ok) {
      this.loadAppt();
    }
  }

  render() {
    return (
      <div>
        <p></p>
        <h2>Service appointments</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>VIN</th>
              <th>Customer name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Technician</th>
              <th>Reason</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.appointments.map((appt) => {
              return (
                <tr key={appt.id}>
                  <td>{appt.vin}</td>
                  <td>
                    {this.state.vins.includes(appt.vin) && (
                      <p className="text-warning">☆☆{appt.customer_name}☆☆</p>
                    )}
                    {!this.state.vins.includes(appt.vin) && (
                      <p>{appt.customer_name}</p>
                    )}
                  </td>
                  <td>{appt.date}</td>
                  <td>{appt.time}</td>
                  <td>{appt.technician.technician_name}</td>
                  <td>{appt.reason}</td>
                  <td>
                    <button
                      value={appt.id}
                      type="button"
                      onClick={this.handleCancel}
                      className="btn btn-danger"
                    >
                      Cancel
                    </button>
                    <button
                      value={appt.id}
                      type="button"
                      onClick={this.handleFinish}
                      className="btn btn-success"
                    >
                      Finished
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AppointmentsList;
