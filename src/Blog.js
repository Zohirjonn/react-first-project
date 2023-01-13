import React from "react";
import JsonApp from "./jsonLesson/JsonApp";
import Fade from "react-reveal/Fade";
import "./blog.css";
const Blog = () => {
  return (
    <Fade bottom>
      <div className="blog">
        <h1>Blog</h1>
        <p>This is blog pages</p>
      </div>
      <JsonApp />
    </Fade>
  );
};

export default Blog;
