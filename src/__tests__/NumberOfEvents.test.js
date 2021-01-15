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
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state('suggestions');
    expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(suggestions.length + 1);
    for (let i = 0; i < suggestions.length; i += 1) {
      expect(CitySearchWrapper.find('.suggestions li').at(i).text()).toBe(suggestions[i]);
    }
  });

  test('suggestion list match the query when changed', () => {
    CitySearchWrapper.setState({ query: '', suggestions: [] });
    CitySearchWrapper.find(".city").simulate("change", {
      target: { value: "Berlin" },
    });
    const query = CitySearchWrapper.state("query");
    const filteredLocations = locations.filter((location) => {
      return location.toUpperCase().indexOf(query.toUpperCase()) > -1;
    });
    expect(CitySearchWrapper.state("suggestions")).toEqual(filteredLocations);
  });

  test("selecting a suggestion should change query state", () => {
    CitySearchWrapper.setState({
      query: 'Berlin'  });
    const suggestions = CitySearchWrapper.state('suggestions');
    CitySearchWrapper.find('.suggestions li').at(0).simulate('click');
    expect(CitySearchWrapper.state("query")).toBe(suggestions[0]);
  });

  test("suggestions list will appear upon having a focus on city input field", () => {
    CitySearchWrapper.setState({
      query: '',
      suggestions: locations,
    });
    CitySearchWrapper.find('.city').simulate('focus');
    expect(CitySearchWrapper.find('.suggestions').prop('style')).toEqual({});
  });
});