import { NavLink } from "react-router-dom";
import "./style.css";
import { RiFileMusicLine } from "react-icons/ri";
import { HiOutlinePhotograph } from "react-icons/hi";
import { AiOutlineFileText } from "react-icons/ai";
import { ImFileVideo } from "react-icons/im";

function DashboardSidebar(props) {
  return (
    <div className="sidebar-wrapper">
      <h5 id="sidebar-header">My Files</h5>
      <ul>
        <li>
          <NavLink activeClassName="sidebar-menu-active" exact to="/audios">
            <p>
              <span className="mr-2">
                <RiFileMusicLine style={{ fontSize: "25px" }} />
              </span>
              Audios
            </p>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="sidebar-menu-active" to="/photos">
            <p>
              <span className="mr-2">
                <HiOutlinePhotograph style={{ fontSize: "25px" }} />
              </span>
              Photos
            </p>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="sidebar-menu-active" to="/documents">
            <p>
              <span className="mr-2">
                <AiOutlineFileText style={{ fontSize: "25px" }} />
              </span>
              Documents
            </p>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="sidebar-menu-active" to="/videos">
            <p>
              <span className="mr-2">
                <ImFileVideo style={{ fontSize: "25px" }} />
              </span>
              Videos
            </p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default DashboardSidebar;
