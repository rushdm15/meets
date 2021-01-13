import React, { Component } from 'react';
import CitySearch from './CitySearch';
import Event from './Event';

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <div className="App">
        <CitySearch />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default EventList;