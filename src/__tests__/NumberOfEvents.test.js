import React from 'react';
import { shallow } from 'enzyme';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from "../mock-data";
import { extractLocations } from "../api";


describe('<NumberOfEvents /> component', () => {
    let locations, NumberOfEventsWrapper;
    beforeAll(() => {
        locations = extractLocations(mockData);
        NumberOfEventsWrapper = shallow(<NumberOfEvents locations={locations} />);
    });

  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.city')).toHaveLength(4);
  });

  test('renders a list of suggestions', () => {
    expect(NumberOfEventsWrapper.find('.suggestions')).toHaveLength(4);
  });

  test('renders text input correctly', () => {
    const query = NumberOfEventsWrapper.state('query');
    expect(NumberOfEventsWrapper.find('.city').prop('value')).toBe(query);
  });

  test('change state when text input changes', () => {
    NumberOfEventsWrapper.setState({
      query: 'Munich'
    });
    const eventObject = { target: { value: 'Berlin' }};
    NumberOfEventsWrapper.find('.city').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('query')).toBe('Berlin');
  });

  test('render list of suggestions correctly', () => {
    const locations = extractLocations(mockData);
    NumberOfEventsWrapper.setState({ suggestions: locations });
    const suggestions = NumberOfEventsWrapper.state('suggestions');
    expect(NumberOfEventsWrapper.find('.suggestions li')).toHaveLength(suggestions.length + 1);
    for (let i = 0; i < suggestions.length; i += 1) {
      expect(NumberOfEventsWrapper.find('.suggestions li').at(i).text()).toBe(suggestions[i]);
    }
  });

});