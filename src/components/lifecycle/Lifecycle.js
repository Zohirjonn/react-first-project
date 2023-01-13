import React from "react";

class Lifecycle extends React.Component {
    
  constructor(props) {
    super(props);
   
    console.log("Constructor is working!");
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
      });
  }
  render() {
    console.log("Render is working!");
    return <div></div>;
  }
}

export default Lifecycle;
