import React from "react";

class Lesson1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ford Mustang",
      color: "Red",
      year: 2022,
      date: new Date(),
    };
  }
  changeColor = () => {
    this.setState({ color: "Blue" });
  };
  render() {
    return (
      <div id="n2">
        <h1>My car {this.state.name}</h1>
        <h1>color {this.state.color}</h1>
        <h1>year {this.state.year}</h1>
        <h2>{this.state.date.toLocaleDateString()}</h2>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}

export default Lesson1;
