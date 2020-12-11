import "./style.css";
import DashboardHeader from "../DashboardHeader";
import DashboardSidebar from "../DashboardSidebar";
import { BiSearch } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";

function Audio(props) {
  return (
    <div className="dashboard">
      <DashboardHeader />
      <div className="dashboard-wrapper container-fluid">
        <div className="row">
          <div className="col-md-3 col-lg-2 dashboard-left">
            <DashboardSidebar />
          </div>
          <div className="col-12 col-md-9 col-lg-10 dashboard-right">
            <div className="dashboard-top">
              <div className="container">
                <div className="sm-dropdown">
                  <RiArrowDownSLine
                    className="arrow-down"
                    style={{ fontSize: "25px" }}
                  />
                  <div className="sm-dropdown-content">
                    <ul>
                      <li>
                        <NavLink
                          activeClassName="sm-dropdown-menu-active"
                          exact
                          to="/audios"
                        >
                          <p>Audios</p>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          activeClassName="sm-dropdown-menu-active"
                          to="/photos"
                        >
                          <p>Photos</p>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          activeClassName="sm-dropdown-menu-active"
                          to="/documents"
                        >
                          <p>Documents</p>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          activeClassName="sm-dropdown-menu-active"
                          to="/videos"
                        >
                          <p>Videos</p>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <BiSearch />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search file"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Audio;
