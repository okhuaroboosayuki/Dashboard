import "../assets/scss/sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, NavLink, useMatch, useResolvedPath } from "react-router-dom";
import { DarkModeContext } from "../context/darkModeContext";
import { useContext } from "react";

function SideBar() {
  function NavBarLink({ to, children, className, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname });

    return (
      <li className={isActive ? "active" : ""}>
        <NavLink to={to} className={className} {...props}>
          {children}
        </NavLink>
      </li>
    );
  }

  const { dispatch } = useContext(DarkModeContext);

  return (
    <section className="side_bar">
      <div className="top">
        <Link to="/">
          <span className="logo">Admin</span>
        </Link>
      </div>

      <hr />

      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <NavBarLink to="/">
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </NavBarLink>

          <p className="title">LISTS</p>
          <NavBarLink to="/users">
            <PersonIcon className="icon" />
            <span>Users</span>
          </NavBarLink>

          <NavBarLink to="/products">
            <StoreIcon className="icon" />
            <span>Products</span>
          </NavBarLink>

          <li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>

          <p className="title">USEFUL</p>
          <li>
            <AnalyticsIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>

          <p className="title">SERVICE</p>
          <li>
            <MedicalInformationIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>

          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>

      <hr />

      <div className="bottom">
        <div
          className="color_option"
          onClick={() => dispatch({ type: "LIGHT_MODE" })}
        ></div>
        <div
          className="color_option"
          onClick={() => dispatch({ type: "DARK_MODE" })}
        ></div>
      </div>
    </section>
  );
}

export default SideBar;
