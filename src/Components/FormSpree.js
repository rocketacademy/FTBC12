import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      extra: "",
    };
  }

  handleChange = (events) => {
    console.log(events);
    let { name, value } = events.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    // first create a user to store
    alert(`
    Hello ${this.state.email} \n
    Your password is: ${this.state.password}
    `);

    // update internal state with what is being stored online.
    this.setState({
      email: "",
      password: "",
      extra: "",
    });
  };

  render() {
    return (
      <div>
        <form action="https://formspree.io/f/xqkovqrj" method="POST">
          <input
            type="text"
            value={this.state.email}
            name="email"
            placeholder="Email here"
            required
            onChange={(events) => this.handleChange(events)}
          />
          <input
            type="text"
            name="password"
            value={this.state.password}
            placeholder="Password here"
            required
            onChange={(events) => this.handleChange(events)}
          />
          <input
            type="text"
            name="extra"
            value={this.state.extra}
            placeholder="Extra here"
            required
            onChange={(events) => this.handleChange(events)}
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
