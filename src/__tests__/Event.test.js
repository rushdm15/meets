import React from 'react';
import { shallow } from 'enzyme';
import CitySearch from '../CitySearch';
import { mockData } from "../mock-data";
import { extractLocations } from "../api";
// import EventList from './EventList';
import Event from '../Event'

describe('<Event /> component', () => {
    let EventWrapper;
    beforeAll(() => {
       
        EventWrapper = shallow(<Event event={
      {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {
         "email": "fullstackwebdev@careerfoundry.com",
         "self": true
        },
        "organizer": {
         "email": "fullstackwebdev@careerfoundry.com",
         "self": true
        },
        "start": {
         "dateTime": "2020-05-19T16:00:00+02:00",
         "timeZone": "Europe/Berlin"
        },
        "end": {
         "dateTime": "2020-05-19T17:00:00+02:00",
         "timeZone": "Europe/Berlin"
        },
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {
         "dateTime": "2020-05-19T16:00:00+02:00",
         "timeZone": "Europe/Berlin"
        },
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {
         "useDefault": true
        }
       }} />);
    });

  beforeEach(() => {
      EventWrapper.setState({ showDetails: false });
  });

  test('parent element is rendered', () => { 
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });

  test('button for show is rendered', () => {
    expect(EventWrapper.find('.buttonDetails')).toHaveLength(1);
  });

  test('that Event state toggles on button click', () => {
    const showDetailsState = EventWrapper.state('showDetails');
    EventWrapper.find('.buttonDetails').at(0).simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(!showDetailsState);
  });
 
  test('that event.start/summary/location but not description display always', () => {
    expect(EventWrapper.find('.event_name')).toHaveLength(1);
    
    expect(EventWrapper.find('.event_description')).toHaveLength(0);
  });

  test('that event.description displays on first button click, hides on second', () => {
    //when clicked
    EventWrapper.find('.buttonDetails').at(0).simulate('click');
    //show event desc
    expect(EventWrapper.find('.event_description')).toHaveLength(1);

    //on click again
    EventWrapper.find('.buttonDetails').at(0).simulate('click');
    //hide desc
    expect(EventWrapper.find('.eventDescription')).toHaveLength(0);


  });
});

