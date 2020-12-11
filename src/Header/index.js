import { NavLink, Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import "./style.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { connect } from "react-redux";
import axios from "../axiosApi";
import { logoutAction } from "../redux/actions/toPersistActions";

function Header(props) {
  const { auth, identity } = props;
  const handleLogout = () => {
    // make a request
    axios
      .post(
        "api/v1/account/logout",
        {},
        {
          headers: { Authorization: "Bearer " + identity },
        }
      )
      .then((res) => {
        props.logoutAction();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return (
    <div className="header">
      <div className="container">
        <NavLink to="/" className="brand">
          <h1>CloudX</h1>
        </NavLink>
        <Hamburger />
        <ul className="header-menu">
          <li>
            <NavLink exact activeClassName="active-header-menu" to="/">
              <p>Home</p>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active-header-menu" to="/about-us">
              <p>About Us</p>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active-header-menu" to="/features">
              <p>Features</p>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active-header-menu" to="/pricing">
              <p>Pricing</p>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active-header-menu" to="/contact-us">
              <p>Contact Us</p>
            </NavLink>
          </li>
          {auth ? (
            <li>
              <div className="account-header-tooltip">
                <p id="account-header">
                  Account{""}
                  <span>
                    <IoMdArrowDropdown />
                  </span>
                </p>
                <div className="account-header-tooltip-content">
                  <ul>
                    <li>
                      <NavLink to="/dashboard">
                        <p>Dashboard</p>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/billing">
                        <p>Billing</p>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/resources">
                        <p>Resources</p>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/">
                        <p onClick={handleLogout}>Logout</p>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          ) : (
            <li>
              <Link to="/register" className="btn btn-md register-link">
                <p>Register</p>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.persist.auth,
    identity: state.persist.identity,
  };
};

export default connect(mapStateToProps, { logoutAction })(Header);
