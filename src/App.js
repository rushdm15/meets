import React, { Component } from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import EventGenre from './EventGenre';
import './App.css';
import  "./nprogress.css";
import { ScatterChart, Scatter, XAxis, YAxis, 
  CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: "all"
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
       if (this.mounted) {
      this.setState({ events: events, locations: extractLocations(events) });
       }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    window.addEventListener("load", () => {
      function handleNetworkChange(event) {
        if (navigator.onLine) {
          document.body.classList.remove("offline");
        } else {
          document.body.classList.add("offline");
        }
      }
    
      window.addEventListener("online", handleNetworkChange);
      window.addEventListener("offline", handleNetworkChange);
    });
    
    const { currentLocation, numberOfEvents } = this.state;
    if (location) {
    getEvents().then((events) => {
      const locationEvents = (location === 'all')
        ? events
        : events.filter((event) => event.location === location);
      const filteredEvents = locationEvents.slice(0, numberOfEvents)
      this.setState({
        // new array matching locations and showEventCount filter.
        events: filteredEvents,
        currentLocation: location,
      });
    });
  } else {
    getEvents().then((events) => {
      const locationEvents =
        currentLocation === "all"
          ? events
          : events.filter((event) => event.location === currentLocation);
      const filteredEvents = locationEvents.slice(0, eventCount);
      this.setState({
        events: filteredEvents,
        numberOfEvents: eventCount,
      });
    });
  }
};

getData = () => {
  const { locations, events } = this.state;
  const data = locations.map((location)=>{
    const number = events.filter((event) => event.location === location).length
    const city = location.split(' ').shift()
    return { city, number };
  })
  return data;
};

  render() {
    // const { locations, numberOfEvents, events } = this.state;
    return (
      <div className="App">
        <h1>Meet App</h1>
        <h4>Choose your nearest city</h4>
        <CitySearch 
          updateEvents={this.updateEvents} 
          locations={this.state.locations} 
        />
        <NumberOfEvents
          updateEvents={this.updateEvents}
          numberOfEvents={this.state.numberOfEvents}
        />       
         {/* <h4>Events in each city</h4> */}
    <div className="data-vis-wrapper">
       <EventGenre 
          locations={this.state.locations}
          events={this.state.events}       
       />
       <ResponsiveContainer height={400} >
         <ScatterChart
          margin={{
            top: 25, right: 20, bottom: 25, left: 20,
          }}>
          <CartesianGrid />
          <XAxis type="category" dataKey="city" name="city" />
          <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter data={this.getData()} fill="#8884d8" />
         </ScatterChart>
        </ResponsiveContainer>
      </div>  
      <EventList events={this.state.events} />
    </div>
    );
  }
}

export default App;