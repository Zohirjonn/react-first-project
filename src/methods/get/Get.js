import React, { useEffect, useState } from "react";
import { assertExpresionStatement } from "@babel/types";
import axios from "axios";
const Get = () => {
  const [users, setUsers] = setState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.error("error");
      });
  }, []);
  return <div></div>;
};

Get.propTypes = {};

export default Get;
