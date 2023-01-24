import React from "react";

class ServiceHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
      vins: [],
      search: "",
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearchChange(event) {
    const value = event.target.value;
    this.setState({ search: value.toUpperCase() });
  }

  async handleSearch(event) {
    event.preventDefault();
    const apptResponse = await fetch("http://localhost:8080/api/appointments/");
    if (apptResponse.ok) {
      const apptData = await apptResponse.json();
      let appointments = [];
      for (let appt of apptData.appointments) {
        if (this.state.search === appt.vin) {
          appointments.push(appt);
        }
      }
      this.setState({ appointments: appointments });
    } else {
      console.error("apptData:", apptResponse);
    }
  }

  render() {
    return (
      <div>
        <p></p>
        <form className="input-group" onSubmit={this.handleSubmit}>
          <input
            className="form-control"
            value={this.state.search}
            onChange={this.handleSearchChange}
            id="search"
            name="search"
            required
            type="text"
            placeholder="VIN"
          />
          <button
            className="btn btn-primary input-group-append"
            onClick={this.handleSearch}
          >
            Search
          </button>
        </form>
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
            </tr>
          </thead>
          <tbody>
            {this.state.appointments.map((appt) => {
              return (
                <tr key={appt.id}>
                  <td>{appt.vin}</td>
                  <td>
                    {this.state.vins.includes(appt.vin) && (
                      <p className="text-warning">{appt.customer_name}</p>
                    )}
                    {!this.state.vins.includes(appt.vin) && (
                      <p>{appt.customer_name}</p>
                    )}
                  </td>
                  <td>{appt.date}</td>
                  <td>{appt.time}</td>
                  <td>{appt.technician.technician_name}</td>
                  <td>{appt.reason}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ServiceHistory;
