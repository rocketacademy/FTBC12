import React from "react";

export default class Input extends React.Component {
  render() {
    return (
      <input
        type={this.props.type}
        value={this.props.value}
        onChange={this.props.handleChange}
        name={this.props.name}
        placeholder={this.props.placeholder}
      />
    );
  }
}
