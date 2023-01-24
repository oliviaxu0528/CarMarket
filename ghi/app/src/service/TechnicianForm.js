import React from "react";


class TechnicianForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      employeeNumber: "",
      technicianName: "",
    };


    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleNumberChange(event) {
    const value = event.target.value;
    this.setState({ employeeNumber: value });
  }

  handleNameChange(event) {
    const value = event.target.value;
    this.setState({technicianName: value});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = { ...this.state };
    data.employee_number = data.employeeNumber;
    data.technician_name = data.technicianName;
    delete data.employeeNumber;
    delete data.technicianName;

    const techniciansUrl = "http://localhost:8080/api/technicians/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(techniciansUrl, fetchConfig);
    if (response.ok) {
      const cleared = {
        employeeNumber: "",
        technicianName: "",
      };
      this.setState(cleared);
    }
  }

  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Enter a technician</h1>
            <form onSubmit={this.handleSubmit} id="technician-form">
              {}
              <div className="form-floating mb-3">
                <input
                  value={this.state.employeeNumber}
                  onChange={this.handleNumberChange}
                  placeholder="Employee number"
                  required
                  type="text"
                  name="employee_number"
                  id="employee_number"
                  className="form-control"
                />
                <label htmlFor="employee_number">Employee Number</label>
              </div>
              {}
              <div className="form-floating mb-3">
                <input
                  value={this.state.technicianName}
                  onChange={this.handleNameChange}
                  placeholder="Technician name"
                  required
                  type="text"
                  name="technician_name"
                  id="technician_name"
                  className="form-control"
                />
                <label htmlFor="technician_name">Technician Name</label>
              </div>

              <button className="btn btn-primary">Enter</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default TechnicianForm;
