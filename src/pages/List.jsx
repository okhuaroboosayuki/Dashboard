import "../assets/scss/list.scss";
import SideBar from "../components/SideBar"
import NavBar from "../components/NavBar";
import DataTable from "../components/DataTable";

function List(props) {
  return (
    <div className="list">
      <SideBar />
      <div className="list_container">
        <NavBar />
        {/* <DataTable /> */}

        {/* // pass props to DataTable */}
        <DataTable title={props.title} />
      </div>
    </div>
  );
}

export default List;
