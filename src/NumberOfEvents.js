import React, { Component } from "react";
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

  // use default 32
  state = {
    eventCount: this.props.numberOfEvents
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.props.updateEvents(null, value);
    this.setState({ eventCount: value});
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
        className="event-number"
        value={this.props.numberOfEvents}
        onChange={this.handleInputChanged}
      />
      <ErrorAlert text={this.state.infoText} />
    </div>;
  }
}
export default NumberOfEvents;