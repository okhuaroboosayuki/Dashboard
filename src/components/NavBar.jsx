import "../assets/scss/navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';


function NavBar() {
  return (
    <nav className="nav_bar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon className="search_icon" />
        </div>

        <div className="items">
            <div className="item">
                <LanguageIcon className="icon" />
                English
            </div>
            <div className="item">
                <DarkModeIcon className="icon" />
            </div>
            <div className="item">
                <FullscreenExitIcon className="icon" />
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
                <ListIcon className="icon" />
            </div>
            
            <div className="item">
                <img src="https://res.cloudinary.com/dg0sck16v/image/upload/v1680613170/Avatar/charlesdeluvio-K4mSJ7kc0As-unsplash_lbldzv.jpg" alt="avatar" className="avatar" />
            </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
