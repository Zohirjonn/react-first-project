import React from "react";
import Users from "./users.json";
import "./json.css";
const JsonApp = () => {
  return (
    <div>
      {Users.map((user) => {
        return (
          <div className="infos">
            <h1>
              {user.name} {user.age} yoshda
            </h1>
            <small> {user.country}</small>
            <p></p>
            <h1>{user.isStudent}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default JsonApp;
