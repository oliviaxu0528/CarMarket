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
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <div className="dropdown">
              <a
                href="/"
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Inventory
              </a>

              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="manufacturers/list"
                  exact="true">
                  List Manufacturers
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="manufacturers/create"
                  exact="true">
                  Create Manufacturer
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="vehiclemodels/list">
                  List Vehicle Models
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="vehiclemodels/create">
                  Create Vehicle Model
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="automobiles/list">
                  List Automobiles
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="automobiles/create">
                  Create Automobile
                </NavLink>
              </div>
            </div>
            <div className="dropdown">
              <a
                href="/"
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Services
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="/technicians/create">
                  Create Technician
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="/appointments/list">
                  List Appointments
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="/appointments/create">
                  Create Appointment
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="/appointments/history">
                  Services history
                </NavLink>
              </div>
            </div>
            <div className="dropdown">
              <a
                href="/"
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Sales
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="/customers/new">
                  New Cusomter
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="/sales/">
                  Sales Record
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="/sales/new">
                  New Sale
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="/salesman/new">
                  New Salesman
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="/salesman/list">
                  Sales by Salesman
                </NavLink>
              </div>
            </div>




          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;


              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="/customers/new">
                  New Cusomter
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="/sales/">
                  Sales Record
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="/sales/new">
                  New Sale
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="/salesman/new">
                  New Salesman
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="/salesman/sales">
                  Sales by Salesman
                </NavLink>
              </div>