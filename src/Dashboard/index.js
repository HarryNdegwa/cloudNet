import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import "./style.css";
import { BiSearch } from "react-icons/bi";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { FcFile, FcFolder } from "react-icons/fc";

function Dashboard(props) {
  return (
    <div className="dashboard">
      <DashboardHeader />
      <div className="dashboard-wrapper container-fluid">
        <div className="row">
          <div className="col-md-3 col-lg-2 dashboard-left">
            <DashboardSidebar />
          </div>
          <div className="col-12 col-md-9 p-0 col-lg-10 dashboard-right">
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
            <div className="dashboard-center">
              <div className="container">
                <h3 className="mb-2">Home</h3>
                <h6 className="mb-2">Quick Access</h6>
                <div className="container p-0 row">
                  <div className="col-6 col-md-3 quick-access">
                    <div className="quick-access-wrapper">
                      <NavLink to="/audios">
                        <FcFolder style={{ fontSize: "70px" }} />
                      </NavLink>
                      <h6>Audios</h6>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 quick-access">
                    <div className="quick-access-wrapper">
                      <NavLink to="/photos">
                        <FcFolder style={{ fontSize: "70px" }} />
                      </NavLink>
                      <h6>Photos</h6>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 quick-access">
                    <div className="quick-access-wrapper">
                      <NavLink to="/documents">
                        <FcFolder style={{ fontSize: "70px" }} />
                      </NavLink>
                      <h6>Documents</h6>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 quick-access">
                    <div className="quick-access-wrapper">
                      <NavLink to="/videos">
                        <FcFolder style={{ fontSize: "70px" }} />
                      </NavLink>
                      <h6>videos</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <h6 className="mt-5 mb-2">Recent files</h6>

                <div class="recent-files">
                  <ul>
                    <li>
                      <Link to="/">
                        <p>
                          <FcFile className="mr-1" />
                          testing.doc
                        </p>
                      </Link>
                    </li>{" "}
                    <li>
                      <Link to="/">
                        <p>
                          <FcFile className="mr-1" />
                          testing.doc
                        </p>
                      </Link>
                    </li>{" "}
                    <li>
                      <Link to="/">
                        <p>
                          <FcFile className="mr-1" />
                          testing.doc
                        </p>
                      </Link>
                    </li>{" "}
                    <li>
                      <Link to="/">
                        <p>
                          <FcFile className="mr-1" />
                          testing.doc
                        </p>
                      </Link>
                    </li>{" "}
                    <li>
                      <Link to="/">
                        <p>
                          <FcFile className="mr-1" />
                          testing.doc
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
