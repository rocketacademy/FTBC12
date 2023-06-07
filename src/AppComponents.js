import "./App.css";
import React from "react";

// Components
import Greeting from "./Components/ExampleClassBasedComponent";
import Form, { backendURL } from "./Components/Form";
import { Button } from "react-bootstrap";
import API from "./Components/API";
import EventHandler from "./Components/EventHandler";
import "react-calendar/dist/Calendar.css";
import FormSpree from "./Components/FormSpree";
import Calendar from "react-calendar";

// App is a class based React Component
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
    };
  }

  //  define function that returns jsx
  displayName(name) {
    return (
      <div>
        <h3>Good morning {name}</h3>
      </div>
    );
  }

  // life cycle methods
  componentDidMount() {
    console.log("I am running");
  }

  componentDidUpdate() {
    console.log("Parent: I have updated!");
  }

  render() {
    // define JS
    console.log(this.show);
    return (
      // one parent tag, returns all the JSX / HTML to the page
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
          {/* <Button onClick={() => this.setState({ show: !this.state.show })}>
            Show or Hide
          </Button>
          {this.state.show ? (
            <Greeting name="Jerryy" />
          ) : (
            <p>No component here</p>
          )}
                    {/* <EventHandler /> */}
          {/* <Calendar /> */}

          {/* {backendURL}  */}

          <API />
          {/* <Form /> */}
        </header>
      </div>
    );
  }
}

export default App;
