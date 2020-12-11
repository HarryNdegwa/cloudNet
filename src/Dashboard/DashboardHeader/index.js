import { NavLink } from "react-router-dom";
import Hamburger from "./Hamburger";
import "./style.css";

function DashboardHeader(props) {
  return (
    <div className="dashboard-header">
      <div className="container">
        <NavLink to="/" className="dashboard-brand">
          <h1>CloudX</h1>
        </NavLink>
        <Hamburger />
        <ul className="dashboard-header-menu">
          <li>
            <NavLink exact activeClassName="active-header-menu" to="/dashboard">
              <p>Dashboard</p>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active-header-menu" to="/billing">
              <p>Billing</p>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active-header-menu" to="/resources">
              <p>Resources</p>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active-header-menu" to="/my-account">
              <p>My Account</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DashboardHeader;
