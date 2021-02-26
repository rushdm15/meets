import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import CitySearch from '../CitySearch';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default', ({ given, when, then }) => {
      let AppWrapper;  

      given('the user hasn\'t opened the element', () => {
        AppWrapper = mount(<App />);  
      });

      when('the user is on the events page', () => {
        AppWrapper.update();
        expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
      });
  
      then('the elements are closed to allow more room for events', () => {
        expect(AppWrapper.find('.showDetails')).toHaveLength(0); 
      });
    });
  
    test('User can expand an event to see its details', ({ given, and, when, then }) => {
      let AppWrapper;
      given('app loaded', () => {
        AppWrapper = mount(<App />);
      });
    
      and('the list of events has been loaded', () => {
        AppWrapper.update();
        expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
      });
  
      when('the user clicks on the event element', () => {
        AppWrapper.find('.buttonDetails').at(0).simulate('click');  
      });
  
      then('the element should expand', () => {
        expect(AppWrapper.find('.eventDetails')).toHaveLength(0);  
      });
    });
  
  
    test('User can collapse an event to hide its details', ({ given, when, then }) => {
      let AppWrapper;
      given('the user has opened the event element', () => {
        AppWrapper = mount(<App />);
      });
  
      when('the user clicks to collapse the event element', () => {
        AppWrapper.update();
        AppWrapper.find('.buttonDetails').at(0).simulate('click');  
      });
  
      then('the elememt hides the info to make room for other event elements', () => {
        expect(AppWrapper.find('.eventDetails')).toHaveLength(0);  
      });
    });
  });