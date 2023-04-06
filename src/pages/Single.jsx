import "../assets/scss/single.scss";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import Chart from "../components/Chart";
import List from "../components/Table";

function Single() {
  return (
    <div className="single">
      <SideBar />
      <div className="single_container">
        <NavBar />
        <div className="top">
          <div className="left">
            <div className="edit_btn">Edit</div>
            <h1 className="title top_title">Information</h1>
            <div className="item">
              <img
                src="https://res.cloudinary.com/dg0sck16v/image/upload/v1680738694/Avatar/pexels-muhammadtaha-ibrahim-3778211_reb9a5.jpg"
                alt="avatar"
                className="item_image"
              />

              <div className="details">
                <h1 className="item_title">Paul Scholes</h1>
                <div className="item_details">
                  <span className="item_key">Email:</span>
                  <span className="item_value">paul.scholes@manutd.com</span>
                </div>
                <div className="item_details">
                  <span className="item_key">Phone:</span>
                  <span className="item_value">+449012345678</span>
                </div>
                <div className="item_details">
                  <span className="item_key">Address:</span>
                  <span className="item_value">King Street, Manchester</span>
                </div>
                <div className="item_details">
                  <span className="item_key">Country:</span>
                  <span className="item_value">England</span>
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <Chart aspect={3 / 1} title="User's expenditure (Last 6 months)" />
          </div>
        </div>

        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
}

export default Single;
