import React from "react";

export const backendURL = "http://locahost:3001";

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      currentUsers: [],
    };
  }

  componentDidMount() {
    // get the users from local storage
    let currentData = localStorage.getItem("users");

    // if the user exists update the current interal state
    if (currentData) {
      currentData = JSON.parse(currentData);

      // remove the array from here to stop random array nesting
      this.setState({
        currentUsers: currentData,
      });
    } else {
      // if no user, then no need to update
      console.log("no data");
    }
  }

  handleChange = (events) => {
    console.log(events);
    let { name, value } = events.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // first create a user to store
    let user = { email: this.state.email, password: this.state.password };

    // add the current user to users already stored in localstorage
    let newUsers = [...this.state.currentUsers, user];

    // stringify the new users
    let string = JSON.stringify(newUsers);
    console.log(string);

    // set the new users into local storage
    localStorage.setItem("users", string);

    alert(`
    Hello ${this.state.email} \n
    Your password is: ${this.state.password}
    `);

    // update internal state with what is being stored online.
    this.setState({
      email: "",
      password: "",
      currentUsers: newUsers,
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.email}
            name="email"
            placeholder="Email here"
            onChange={(events) => this.handleChange(events)}
          />
          <input
            type="text"
            name="password"
            value={this.state.password}
            placeholder="Password here"
            onChange={(events) => this.handleChange(events)}
          />
          <input type="submit" value="submit" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}
