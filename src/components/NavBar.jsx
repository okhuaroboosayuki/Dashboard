import "../assets/scss/navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import LightModeIcon from "@mui/icons-material/LightMode";
import { DarkModeContext } from "../context/darkModeContext";
import { useContext } from "react";

function NavBar() {
  const { darkMode, dispatch } = useContext(DarkModeContext);

  return (
    <nav className="nav_bar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon className="search_icon" />
        </div>

        <div className="items">
          <div className="item">
            {darkMode ? (
              <LightModeIcon
                className="icon"
                onClick={() => dispatch({ type: "TOGGLE_MODE" })}
              />
            ) : (
              <DarkModeIcon
                className="icon"
                onClick={() => dispatch({ type: "TOGGLE_MODE" })}
              />
            )}
          </div>
          <div className="item">
            <NotificationsNoneIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <img
              src="https://res.cloudinary.com/dg0sck16v/image/upload/v1680902133/Avatar/jurica-koletic-7YVZYZeITc8-unsplash_oyzrlo.jpg"
              alt="avatar"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
