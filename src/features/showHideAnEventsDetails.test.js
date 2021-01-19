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
      given('the user hasnt opened the element', () => {
        AppWrapper = mount(<App />);  
      });

      when('the user is on the events page', () => {
        AppWrapper = mount(<App />);
        expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
      });
  
      then('the elements are closed to allow more room for events', () => {
        expect(AppWrapper.find('.showDetails')).toHaveLength(0); 
      });
    });
  
    test('User can expand an event to see its details', ({ given, when, then }) => {
      let AppWrapper;
      given('the user searched for event info', () => {
        AppWrapper = mount(<App />);
    });
  
      when('the user clicks on the event element', () => {
        CitySearchWrapper.find('.city').simulate('change', { target: { value: 'Berlin' } });  
      });
  
      then('the element should expand', () => {
        expect(AppWrapper.find('.event-details')).toHaveLength(1);  
      });
    });
  
  
    test('User can collapse an event to hide its details', ({ given, and, when, then }) => {
      let AppWrapper;
      given('user has opened the event element', () => {
        AppWrapper = mount(<App />);
      });
  
      when('the user clicks to collapse the event element', () => {
        AppWrapper.find('.event .details-button').at(0).simulate('click');  
      });
  
      then('the elememt hides the info to make room for other event elements', () => {
        expect(AppWrapper.find('.event .event-details')).toHaveLength(0);  
      });
    });
  });