import React from "react";
import { Button } from "react-bootstrap";

export default class EventHandler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: 0,
      clicked: 0,
      blur: 0,
      showHidden: false,
      input: "",
    };
  }

  handleClick = () => {
    this.setState({
      clicked: this.state.clicked + 1,
    });
  };

  handleHover = () => {
    this.setState({
      hovered: this.state.hovered + 1,
    });

    if (this.state.hovered > 5) {
      this.setState({ showHidden: true });
    }
  };

  handleBlur = () => {
    this.setState({
      blur: this.state.blur + 1,
    });
  };

  handleChange = (e) => {
    console.log(e);
    this.setState({
      input: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClick}>Click Me</Button>
        <br />
        {this.state.showHidden && this.state.blur > 5 ? null : (
          <div onMouseEnter={this.handleHover} className="box"></div>
        )}
        <br />
        <input
          type="text"
          value={this.state.input}
          onChange={(e) => this.handleChange(e)}
          onBlur={this.handleBlur}
          name="input"
        />

        <h2>Clicked: {this.state.clicked}</h2>
        <h2>Hovered: {this.state.hovered}</h2>
        <h2>Blured: {this.state.blur}</h2>
        <h2>Input value: {this.state.input}</h2>

        {this.state.clicked > 10 ? (
          <h1>Don't you ahev better things to do?</h1>
        ) : null}

        {this.state.input.length > 0 ? ( // one condition
          <p>{this.state.input}</p>
        ) : this.state.blur > 10 ? ( // one condition
          <p>blured</p>
        ) : (
          <p>false!</p>
        )}
      </div>
    );
  }
}
