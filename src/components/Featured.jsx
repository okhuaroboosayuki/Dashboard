import "../assets/scss/featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useEffect, useState } from "react";

function Featured() {
  const ProgressProvider = ({ valueStart, valueEnd, children }) => {
    const [value, setValue] = useState(valueStart);
    useEffect(() => {
      setValue(valueEnd);
    }, [valueEnd]);

    return children(value);
  };

  const [valueEnd, setValueEnd] = useState(0);

  useEffect(() => {
    setValueEnd(Math.round(8.56));
  }, []);

  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Users Added</h1>
        <MoreVertIcon fontSize="small" />
      </div>

      <div className="bottom">
        <div className="featured_chart rotate_animation">
          <ProgressProvider valueStart={0} valueEnd={valueEnd} >
            {value => (
              <CircularProgressbar value={value} text={`${value}%`} strokeWidth={4} />
            )}
          </ProgressProvider>
        </div>

        <p className="title">Total users added today</p>
        <p className="amount">1284</p>

        <div className="summary">
          <div className="item">
            <div className="item_title">Target</div>
            <div className="item_result negative">
              <ArrowDropDownIcon />
              <div className="result_amount">15k</div>
            </div>
          </div>

          <div className="item">
            <div className="item_title">Last Week</div>
            <div className="item_result positive">
              <ArrowDropUpIcon />
              <div className="result_amount">800</div>
            </div>
          </div>

          <div className="item">
            <div className="item_title">Last Month</div>
            <div className="item_result neutral">
              <ArrowRightIcon />
              <div className="result_amount">3k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
