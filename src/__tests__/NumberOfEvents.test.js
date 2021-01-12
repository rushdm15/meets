import React from 'react';
import { shallow } from 'enzyme';
// import CitySearch from '../CitySearch';
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
    expect(NumberOfEventsWrapper.find('.city')).toHaveLength(1);
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

});