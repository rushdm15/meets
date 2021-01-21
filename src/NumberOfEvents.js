import React, { Component } from "react";
import { ErrorAlert } from './Alert.js';

class NumberOfEvents extends Component {

  // use default 32
  state = {
    eventCount: 32
  }

  handleNumberChanged = (event) => {
    const value = event.target.value;
    this.setState({ eventCount: value });

    // if user has input value, call updateEventCount() in App.js
    if (value !== "") {
      this.props.updateEventCount(value);
    }
  }

  render() {
    return <div className="NumberOfEvents">
      <ErrorAlert text={this.state.infoText} />
      <input
        type="number"
        className="viewNumber"
        value={this.state.eventCount}
        onChange={this.handleNumberChanged}
      />
    </div>;
  }
}
export default NumberOfEvents;