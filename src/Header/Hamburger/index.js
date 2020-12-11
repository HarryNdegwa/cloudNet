import { useState } from "react";

import "./style.css";
import HamburgerMenu from "react-hamburger-menu";
import { NavLink } from "react-router-dom";

function Hamburger(props) {
  const [hamOpen, setHamOpen] = useState(false);
  // const [menuOpen, setMenuOpen] = useState();
  const handleClick = function () {
    setHamOpen(!hamOpen);
  };

  return (
    <div className="hamburger-container">
      <div>
        <HamburgerMenu
          isOpen={hamOpen}
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
          hamOpen ? `slide-in` : `hamburger-menu-invisible`
        }`}
      >
        <ul>
          <li>
            <p>
              <NavLink activeClassName="active-hamburger-menu" to="/">
                Home
              </NavLink>
            </p>
          </li>
          <li>
            <p>
              <NavLink activeClassName="active-hamburger-menu" to="/about">
                About
              </NavLink>
            </p>
          </li>
          <li>
            <p>
              <NavLink activeClassName="active-hamburger-menu" to="/features">
                Features
              </NavLink>
            </p>
          </li>
          <li>
            <p>
              <NavLink activeClassName="active-hamburger-menu" to="/pricing">
                Pricing
              </NavLink>
            </p>
          </li>
          <li>
            <p>
              <NavLink activeClassName="active-hamburger-menu" to="/contact">
                Contact Us
              </NavLink>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Hamburger;
