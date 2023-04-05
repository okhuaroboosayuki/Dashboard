import "../assets/scss/list.scss";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import DataTable from "../components/DataTable";

function List() {
  return (
    <div className="list">
      <Sidebar />
      <div className="list_container">
        <NavBar />
        <DataTable />
      </div>
    </div>
  );
}

export default List;
