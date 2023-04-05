import "../assets/scss/list.scss";
import SideBar from "../components/SideBar"
import NavBar from "../components/NavBar";
import DataTable from "../components/DataTable";

function List() {
  return (
    <div className="list">
      <SideBar />
      <div className="list_container">
        <NavBar />
        <DataTable />
      </div>
    </div>
  );
}

export default List;
