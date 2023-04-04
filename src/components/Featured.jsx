import "../assets/scss/featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Featured() {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>

      <div className="bottom">
        <div className="featured_chart">
          <CircularProgressbar value={80} text={"80%"} strokeWidth={4} />
        </div>

        <p className="title">Total sales made today</p>
        <p className="amount">$500</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p>

        <div className="summary">
          <div className="item">
            <div className="item_title">Target</div>
            <div className="item_result positive">
              <ArrowDropUpIcon />
              <div className="result_amount">$15.3k</div>
            </div>
          </div>

          <div className="item">
            <div className="item_title">Last Week</div>
            <div className="item_result negative">
              <ArrowDropDownIcon />
              <div className="result_amount">$10.8k</div>
            </div>
          </div>

          <div className="item">
            <div className="item_title">Last Month</div>
            <div className="item_result positive">
              <ArrowDropUpIcon />
              <div className="result_amount">$12.3k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
