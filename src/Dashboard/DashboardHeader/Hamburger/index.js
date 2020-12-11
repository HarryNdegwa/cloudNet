import { useState } from "react";

import "./style.css";
import HamburgerMenu from "react-hamburger-menu";
import { NavLink } from "react-router-dom";

function Hamburger(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = function () {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="hamburger-container">
      <div>
        <HamburgerMenu
          isOpen={menuOpen}
          menuClicked={handleClick}
          width={25}
          height={20}
          color="orange"
          strokeWidth={3}
          animationDuration={0.3}
        />
      </div>

      <div
        className={`hamburger-menu ${
          menuOpen ? `slide-in` : `hamburger-menu-invisible`
        }`}
      >
        <ul>
          <li>
            <p>
              <NavLink
                exact
                activeClassName="active-hamburger-menu"
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </p>
          </li>
          <li>
            <p>
              <NavLink activeClassName="active-hamburger-menu" to="/billing">
                Billing
              </NavLink>
            </p>
          </li>
          <li>
            <p>
              <NavLink activeClassName="active-hamburger-menu" to="/resources">
                Resources
              </NavLink>
            </p>
          </li>
          <li>
            <p>
              <NavLink activeClassName="active-hamburger-menu" to="/my-account">
                Account
              </NavLink>
            </p>
          </li>
          <li>
            <p>
              <NavLink activeClassName="active-hamburger-menu" to="/contact">
                Logout
              </NavLink>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Hamburger;
