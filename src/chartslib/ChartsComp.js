import React from "react";
import SimpleChart from "./SimpleChart";
import Fade from "react-reveal/Fade";
import "./master.css";
const ChartsComp = () => {
  return (
    <Fade bottom>
      <div>
        <SimpleChart />
      </div>
    </Fade>
  );
};

export default ChartsComp;
