import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"></a>

        <NavLink className="navbar-brand" to="/">
          CarCar
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="manufacturers/list">
                Manufacturers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="manufacturers/create">
                  Create Manufacturer
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="vehiclemodels/list">
                  List Vehicle Models
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="vehiclemodels/create">
                  Create Vehicle Model
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="automobiles/list">
                List Automobiles
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="automobiles/create">
                  Create Automobile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="appointments/list">
                List Appointments
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="appointments/create">
                Create Appointment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="">
                Service History
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="technicians/create">
                Technician Form
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

export default Nav;
