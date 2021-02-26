// import { findAllByTestId } from "@testing-library/react";
import React, { Component } from "react";

class Event extends Component {
  state = {
    showDetails: false,
  };

  handleShowDetails = () => {
    this.setState((prevState) => ({
      showDetails: !prevState.showDetails,
    }));
  };

  render() {
    const { event } = this.props;
    const showDetails = this.state.showDetails;

    return (
      <div className="event">
        <div className="event_wrapper">
          <p className="event_name">{event.summary}</p>
          <p className="event_location">{event.start.dateTime}</p>

          <button onClick={() => this.handleShowDetails()} className="buttonDetails">
            {showDetails ? "Hide Details" : "Show Details"}
          </button>
        </div>
        {showDetails && (
          <div className="event_details">
            <p className="event_description">{event.description}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Event;