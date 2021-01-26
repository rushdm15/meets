import React, { Component } from "react";
import { ErrorAlert } from './Alert.js';

class NumberOfEvents extends Component {

  // use default 32
  state = {
    eventCount: 32
  }

  // handleNumberChanged = (event) => {
  //   const value = event.target.value;
  //   this.setState({ eventCount: value });

  //   // if user has input value, call updateEventCount() in App.js
  //   if (value !== "") {
  //     this.props.updateEventCount(value);
  //   }
  // }

  handleNumberChanged = (event) => {
    const eventCount = event.target.value;
    // this.setState({ eventCount: value});
    if (eventCount < 1) {
      return this.setState({
        eventCount: '',
        errorText: 'Number must be between 1 and 32',
      });
    } else if (eventCount > 32) {
      return this.setState({
        eventCount: '',
        errorText: 'Number must be between 1 and 32',
      });
    } else {
      this.setState({
        eventCount,
        errorText: '',
      });
      this.props.updateEventCount(eventCount);
    }
  };

  render() {
    return <div className="NumberOfEvents">
      <input
        type="number"
        className="viewNumber"
        value={this.state.eventCount}
        onChange={this.handleNumberChanged}
      />
      <ErrorAlert text={this.state.infoText} />
    </div>;
  }
}
export default NumberOfEvents;