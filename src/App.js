import React, { Component } from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './App.css';
import  "./nprogress.css";

class App extends Component {
  state = {
    events: [],
    locations: [],
    userFilter: [],
    NumberOfEvents: 32
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
       if (this.mounted) {
      this.setState({ events, locations: extractLocations(events) });
       }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEventCount = (number) => {
    this.setState({
      showEventCount: number
    });
  };

  updateEvents = (location) => {
    getEvents().then((events) => {
      const showEventCount = this.state.showEventCount;

      const locationEvents = (location === 'all')
        ? events
        : events.filter((event) => event.location === location);

      const filteredEvents = locationEvents.slice(0, showEventCount)

      this.setState({
        // new array matching locations and showEventCount filter.
        events: filteredEvents
      });
    });
  }

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} showEventCount={this.state.showEventCount} />
        <NumberOfEvents updateEventCount={this.updateEventCount} />
      </div>
    );
  }
}

export default App;