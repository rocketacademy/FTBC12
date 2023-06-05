import React from "react";

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: ["Apple", "Banana", "Cherry", "Durian"],
      clicked: 0,
    };
  }

  incrementCount = () => {
    this.setState({ clicked: this.state.clicked + 1 });
  };

  componentDidUpdate() {
    console.log("Child: I have updated!");
    if (this.state.clicked > 10) {
      console.log("WOW");
    }
  }

  componentWillUnmount() {
    console.log("Component is leaving~!!!");
  }

  render() {
    const filteredFoods = this.state.food.filter((food) => food[0] === "A");

    return (
      <div onClick={this.incrementCount}>
        <h1>Greetings {this.props.name}</h1>
        <p>Clicked Count: {this.state.clicked}</p>
        {this.state.clicked > 10 ? (
          filteredFoods.map((x) => {
            return <p>My favourite fruit include: {x}</p>;
          })
        ) : (
          <p>No food.</p>
        )}
      </div>
    );
  }
}
