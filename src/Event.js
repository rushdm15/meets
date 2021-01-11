import React, { Component } from "react";
import EventList from './EventList';

class Event extends Component {
  render() {
    const { events } = this.props;
    return (
      <ul className="Event">
          {events.map(event =>
         <li key={event.id}>
          <Event event={event} />
        </li>
        )}
      </ul>
    );
  }
}

export default Event;