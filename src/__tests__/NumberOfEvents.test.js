import React from 'react';
import { shallow } from 'enzyme';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from "../mock-data";
import { extractLocations } from "../api";


describe('<NumberOfEvents /> component', () => {
    test('render text input', () => {
      const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
      expect(NumberOfEventsWrapper.find('.city')).toHaveLength(1);
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