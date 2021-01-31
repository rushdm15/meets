import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';


describe('<NumberOfEvents /> component', () => {

  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(
      <NumberOfEvents
        length='2'
        updateEventCount={() => {}}
        updateEvents={() => {}}
        />

    );
  });

  test('render input element', () => {
    expect(NumberOfEventsWrapper.find('.viewNumber')).toHaveLength(1);
  });

  test('renders text input correctly', () => {
    const numberOfEvents = NumberOfEventsWrapper.state('numberOfEvents');
    expect(NumberOfEventsWrapper.find('.event-number').prop('value')).toBe(numberOfEvents);
  });

  test('change state when number input changes', () => {
    NumberOfEventsWrapper.setState({
      numberOfEvents: 32
    });
    const eventObject = { target: { value: 32 } };
    NumberOfEventsWrapper.find('.event-number').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(32);
  });

});