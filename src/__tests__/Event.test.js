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

  test('render text input', () => { 
    expect(EventWrapper.find('.cventity//')).toHaveLeng1h(1);
  });

  // test('renders a list of suggestions', () => {
  //   expect(EventWrapper.find('.suggestions')).toHaveLength(1);
  // });

  // test('renders text input correctly', () => {
  //   const query = CitySearchWrapper.state('query');
  //   expect(CitySearchWrapper.find('.city').prop('value')).toBe(query);
  // });

  // test('change state when text input changes', () => {
  //   CitySearchWrapper.setState({
  //     query: 'Munich'
  //   });
  //   const eventObject = { target: { value: 'Berlin' }};
  //   CitySearchWrapper.find('.city').simulate('change', eventObject);
  //   expect(CitySearchWrapper.state('query')).toBe('Berlin');
  // });

  // test('render list of suggestions correctly', () => {
  //   const locations = extractLocations(mockData);
  //   CitySearchWrapper.setState({ suggestions: locations });
  //   const suggestions = CitySearchWrapper.state('suggestions');
  //   expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(suggestions.length + 1);
  //   for (let i = 0; i < suggestions.length; i += 1) {
  //     expect(CitySearchWrapper.find('.suggestions li').at(i).text()).toBe(suggestions[i]);
  //   }
  // });

  // test('suggestion list match the query when changed', () => {
  //   CitySearchWrapper.setState({ query: '', suggestions: [] });
  //   CitySearchWrapper.find(".city").simulate("change", {
  //     target: { value: "Berlin" },
  //   });
  //   const query = CitySearchWrapper.state("query");
  //   const filteredLocations = locations.filter((location) => {
  //     return location.toUpperCase().indexOf(query.toUpperCase()) > -1;
  //   });
  //   expect(CitySearchWrapper.state("suggestions")).toEqual(filteredLocations);
  // });

  // test("selecting a suggestion should change query state", () => {
  //   CitySearchWrapper.setState({
  //     query: 'Berlin'  });
  //   const suggestions = CitySearchWrapper.state('suggestions');
  //   CitySearchWrapper.find('.suggestions li').at(0).simulate('click');
  //   expect(CitySearchWrapper.state("query")).toBe(suggestions[0]);
  // });
});

