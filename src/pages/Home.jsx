import SideBar from "../components/SideBar";
import "../assets/scss/home.scss";
import NavBar from "../components/NavBar";
import Widget from "../components/Widget";
import Featured from "../components/Featured";
import Chart from "../components/Chart";

function Home() {
  return (
    <div className="home">
      <SideBar />
      <div className="home_container">
        <NavBar />

        <div className="widgets">
          <Widget type="users" />
          <Widget type="orders" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>

        <div className="chart_container">
          <Featured />
          <Chart />
        </div>
      </div>
    </div>
  );
}

export default Home;
