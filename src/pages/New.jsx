import "../assets/scss/new.scss";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { useState } from "react";

function New({ inputs, title }) {
  const [file, setFile] = useState("");

  return (
    <div className="new">
      <SideBar />
      <div className="new_container">
        <NavBar />

        <div className="top">
          <h1>{title}</h1>
        </div>

        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt="empty avatar"
            />
          </div>

          <div className="right">
            <form>
              <div className="form_input">
                <label htmlFor="file">
                  Image: <DriveFolderUploadIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              {inputs.map((input) => (
                <div className="form_input" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} id={input.placeholder} />
                </div>
              ))}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
