import "../assets/scss/home.scss";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import Widget from "../components/Widget";
import Featured from "../components/Featured";
import Chart from "../components/Chart";
import List from "../components/Table";

function Home() {
  return (
    <div className="home">
      <SideBar />
      <div className="home_container">
        <NavBar />

        <div className="widgets">
          <Widget type="users" />
          <Widget type="units" />
          <Widget type="wards" />
          <Widget type="teams" />
        </div>

        <div className="chart_container">
          <Featured />
          <Chart aspect={2 / 1} title="Last 6 months" />
        </div>

        <div className="list_container">
          <h1 className="list_title">Latest Registrations</h1>
          <List />
        </div>
      </div>
    </div>
  );
}

export default Home;
