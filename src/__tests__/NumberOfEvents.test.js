import React from 'react';
import { shallow } from 'enzyme';
// import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    test('render text input', () => {
      const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
      expect(NumberOfEventsWrapper.find('.city')).toHaveLength(1);
    });
  });