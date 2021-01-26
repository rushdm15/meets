import React, { Component } from "react";
import { ErrorAlert } from './Alert';

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

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.props.updateEvents(null, value);
    this.setState({ NumberOfEvents: value});
    if (value < 1) {
      return this.setState({
        infoText: 'Number must be between 1 and 32',
      });
    } else if (value > 32) {
      return this.setState({
        infoText: 'Number must be between 1 and 32',
      });
    } else {
      this.setState({
        infoText: '',
      });
    }
  };

  render() {
    return <div className="NumberOfEvents">
      <input
        type="number"
        className="viewNumber"
        value={this.state.eventCount}
        onChange={this.handleInputChanged}
      />
      <ErrorAlert text={this.state.infoText} />
    </div>;
  }
}
export default NumberOfEvents;