import SideBar from "../components/SideBar";
import "../assets/scss/home.scss";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <div className="home">
      <SideBar />
      <div className="home_container">
        <NavBar />
        container
      </div>
    </div>
  );
}

export default Home;
