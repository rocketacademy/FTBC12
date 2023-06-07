import React from "react";

export default class CountryForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="country"
            placeholder="Country here"
            value={this.props.value}
            onChange={(e) => this.props.handleChange(e)}
          />
          <input type="submit" value="submit" onClick={this.props.submit} />
        </form>
      </div>
    );
  }
}
