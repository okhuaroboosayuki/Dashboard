import "../assets/scss/widget.scss";
import GroupsIcon from "@mui/icons-material/Groups";
import GroupIcon from '@mui/icons-material/Group';
import ApartmentIcon from "@mui/icons-material/Apartment";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import {Link} from "react-router-dom";

function Widget({ type }) {
  let data;


  switch (type) {
    case "users":
      data = {
        title: "Total Registered Users",
        link: "See all registered users",
        number: 6300,
        path: `/users`,
        icon: (
          <GroupIcon
            className="icon"
            style={{
              color: "#6439ff",
              backgroundColor: "rgb(230, 227, 227, 0.2)",
            }}
          />
        ),
      };
      break;
    case "units":
      data = {
        title: "Total Units",
        link: "View all units",
        number: 50,
        // path: `/`,
        icon: (
          <ApartmentIcon
            className="icon"
            style={{
              color: "#6439ff",
              backgroundColor: "rgba(230, 227, 227, 0.2)",
            }}
          />
        ),
      };
      break;
    case "wards":
      data = {
        title: "Wards",
        link: "View all wards",
        number: 20,
        // path: `/`,
        icon: (
          <OtherHousesIcon
            className="icon"
            style={{
              color: "#6439ff",
              backgroundColor: "rgba(230, 227, 227, 0.2)",
            }}
          />
        ),
      };
      break;
    case "teams":
      data = {
        title: "Active Teams",
        link: "See active teams",
        number: 15,
        // path: `/`,
        icon: (
          <GroupsIcon
            className="icon"
            style={{
              color: "#6439ff",
              backgroundColor: "rgb(230, 227, 227, 0.2)",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter"> {data.number}</span>
        <Link to={data.path} className="link">{data.link}</Link>
      </div>

      <div className="right">
        <div className="percentage"></div>

        {data.icon}
      </div>
    </div>
  );
}

export default Widget;
