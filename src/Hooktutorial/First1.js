import React, { useState, useEffect } from "react";
import "./first1.css";

const First1 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Siz ${count} marta bosdingiz`;
    console.log(count);
  }, []);
  return (
    <div className="first">
      <h1>Siz {count} marta bosdingiz.</h1>
      <button onClick={() => setCount(count + 1)}> Click</button>
    </div>
  );
};

export default First1;
