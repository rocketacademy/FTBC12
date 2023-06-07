import React from "react";

export default class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        {/* Can add an image if desired */}
        {this.props.image}
        {this.props.children}
      </button>
    );
  }
}
