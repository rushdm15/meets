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

  test('render list of suggestions correctly', () => {
    const locations = extractLocations(mockData);
    NumberOfEventsWrapper.setState({ suggestions: locations });
    const suggestions = NumberOfEventsWrapper.state('suggestions');
    expect(NumberOfEventsWrapper.find('.suggestions li')).toHaveLength(suggestions.length + 1);
    for (let i = 0; i < suggestions.length; i += 1) {
      expect(NumberOfEventsWrapper.find('.suggestions li').at(i).text()).toBe(suggestions[i]);
    }
  });

  test('suggestion list match the query when changed', () => {
    NumberOfEventsWrapper.setState({ query: '', suggestions: [] });
    NumberOfEventsWrapper.find(".city").simulate("change", {
      target: { value: "Berlin" },
    });
    const query = NumberOfEventsWrapper.state("query");
    const filteredLocations = locations.filter((location) => {
      return location.toUpperCase().indexOf(query.toUpperCase()) > -1;
    });
    expect(NumberOfEventsWrapper.state("suggestions")).toEqual(filteredLocations);
  });

  test("selecting a suggestion should change query state", () => {
    NumberOfEventsWrapper.setState({
      query: 'Berlin'  });
    const suggestions = NumberOfEventsWrapper.state('suggestions');
    NumberOfEventsWrapper.find('.suggestions li').at(0).simulate('click');
    expect(NumberOfEventsWrapper.state("query")).toBe(suggestions[0]);
  });

  test("suggestions list will appear upon having a focus on city input field", () => {
    NumberOfEventsWrapper.setState({
      query: '',
      suggestions: locations,
    });
    NumberOfEventsWrapper.find('.city').simulate('focus');
    expect(NumberOfEventsWrapper.find('.suggestions').prop('style')).toEqual({});
  });
});