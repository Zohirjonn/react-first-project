import React from "react";
// import MyApp from "./components/MyApp";
// import MyApp2 from "./components/MyApp2";
// import Component1 from "./components/compontent1";
// import Lesson1 from "./components/stateLesson/Lesson1";
// import Count from "./components/stateLesson/Count";
// import Lifecycle from "./components/lifecycle/Lifecycle";
// import Backend from "./components/Api/Backend";
// import SassTutorial from "./components/SassTutorial/SassTutorial";
import Blog from "./Blog";
import About from "./About";
import Nav1 from "./Nav1";
import Home from "./Home";
import ChartsComp from "./chartslib/ChartsComp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Appfile.css";
import First1 from "./Hooktutorial/First1";
import Tutorialimage from "./components/ScrollEffect/tutorial";
function App() {
  const tepaga = () => {
    window.scroll(0, 0);
  };
  return (
    <BrowserRouter>
      <div className="app">
        <Nav1 />
        <button onClick={tepaga} className="tepaga">
          Tepaga
        </button>
        <Tutorialimage />
        <First1 />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/backend" element={<Backend />} /> */}
          <Route path="/chart" element={<ChartsComp />} />
        </Routes>
        {/* <Backend /> */}
        {/* <Component1 /> */}
      </div>
    </BrowserRouter>
  );
}
export default App;
