import React, { useEffect } from "react";
import "./tutorial.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Image1 from "./image/6142106.jpg";
const tutorial = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    AOS.init();
  });
  return (
    <div>
      <div className="imagesection">
        <img
          src={Image1}
          data-aos="fade-right"
          data-aos-duration="800"
          alt="hato"
        />
      </div>
    </div>
  );
};

export default tutorial;
