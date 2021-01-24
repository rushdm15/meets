import React, { Component } from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './App.css';
import  "./nprogress.css";
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';

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
    const { locations, numberOfEvents } = this.state;
    return (
      <div className="App">
        <h1>Meet App</h1>
        <h4>Choose your nearest city</h4>
        <CitySearch updateEvents={this.updateEvents} locations={locations} />
        <NumberOfEvents
          updateEvents={this.updateEvents}
          numberOfEvents={numberOfEvents}
        />       
         <h4>Events in each city</h4>

         <ScatterChart
          width={400}
          height={400}
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="stature" unit="cm" />
          <YAxis type="number" dataKey="y" name="weight" unit="kg" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="A school" data={data} fill="#8884d8" />
        </ScatterChart>

      </div>
    );
  }

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(' ').shift()
      return {city, number};
    })
    return data;
  };
}

export default App;