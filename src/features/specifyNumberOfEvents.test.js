import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import CitySearch from '../CitySearch';

const feature = loadFeature('./src/features/filterEventsByCity.feature');

defineFeature(feature, test => {
    test('When user hasn\'t specified a number, 32 is the default number', ({ given, when, then }) => {
      given('that a user hasn\'t specified the number of events per page', () => {
  
      });
      let AppWrapper;
      when('the user searches for events', () => {
        AppWrapper = mount(<App />);
      });
  
      then('32 event elements will display on the page', () => {
        AppWrapper.update();
        expect(AppWrapper.find('.event')).toBeLessThanOreEqual(32);
      });
    });
  
    test('User can change the number of events they want to see', ({ given, when, then }) => {
      let AppWrapper;
      given('the user wants to specify the number of events', () => {
        AppWrapper = mount(<App />);
      });
  
      when('the user clicks on the filter option', () => {
        const NumberOfEvents = {target: {value: 10}};  
        AppWrapper.find('.NumberOfEvents').simulate('change', NumberOfEvents);
      });
  
      then('there should be a dial button to limit the number of events', () => {
        const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
        NumberOfEventsWrapper.setState({NumberOfEvents: 10});
        expect(NumberOfEventsWrapper.state('NumberOfEvents')).toBe('10');
      });
    });
  });