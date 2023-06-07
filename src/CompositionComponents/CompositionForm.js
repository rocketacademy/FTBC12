import React from "react";
import Input from "./Input";
import Button from "./Button";
import Pinapple from "../ButtonImages/pinapple.avif";

export default class CompositionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      phone: "",
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = () => {
    alert(
      `${this.state.email}, ${this.state.password}, ${this.state.phone}, ${this.state.age}`
    );
    this.setState({
      email: "",
      password: "",
      phone: "",
      age: 0,
    });
  };

  render() {
    return (
      <div>
        <Input
          name="email"
          type="text"
          handleChange={this.handleChange}
          placeholder="Email here please"
          value={this.state.email}
        />
        <Input
          name="password"
          type="text"
          handleChange={this.handleChange}
          placeholder="Password here please"
          value={this.state.password}
        />
        <Input
          name="phone"
          type="text"
          handleChange={this.handleChange}
          placeholder="Phone Number here please"
          value={this.state.phone}
        />
        <Input
          name="age"
          type="number"
          handleChange={this.handleChange}
          placeholder="Age here please"
          value={this.state.age}
        />
        <Button
          onClick={this.handleSubmit}
          image={<img src={Pinapple} alt="RA" />}
        >
          Submit
        </Button>
      </div>
    );
  }
}
