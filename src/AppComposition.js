import "./App.css";
import React from "react";
import RA from "./ButtonImages/rocket_academy.png";
import Banana from "./ButtonImages/banana.avif";
import Button from "./CompositionComponents/Button";
import SplitSection from "./CompositionComponents/SplitSection";

import API from "./Components/API";
import EventHandler from "./Components/EventHandler";
import CompositionForm from "./CompositionComponents/CompositionForm";

// App is a class based React Component
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleClick = () => {
    alert("Hello World");
  };

  handleClick1 = () => {
    alert("Banana");
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <Button onClick={this.handleClick} image={<img src={RA} alt="RA" />}>
            Press me
          </Button>

          <Button
            onClick={this.handleClick1}
            image={<img src={Banana} alt="RA" />}
          >
            Press me
          </Button>

          <Button>
            {" "}
            <p>I am a child!</p>
          </Button>

          <Button onClick={this.handleClick}>testing button</Button>

          <SplitSection child1={<API />} child2={<EventHandler />} />

          <CompositionForm />
        </header>
      </div>
    );
  }
}

export default App;
