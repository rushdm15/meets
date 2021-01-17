import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import CitySearch from '../CitySearch';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default', ({ given, when, then }) => {
      given('user hasnt opened the element', () => {
  
      });
      let AppWrapper;
      when('user is on the events page', () => {
        AppWrapper = mount(<App />);
      });
  
      then('the elements are closed to allow more room for events', () => {
        AppWrapper.update();
        expect(AppWrapper.find('.event')).toHaveLength(mockData.length); 
      });
    });
  
    test('User can expand an event to see its details', ({ given, when, then }) => {
      let CitySearchWrapper;
      given('the user searched for event info', () => {
        CitySearchWrapper = shallow(<CitySearch updateEvents={() => {}} locations={locations} />);
      });
  
      when('the user clicks on the event element', () => {
        CitySearchWrapper.find('.city').simulate('change', { target: { value: 'Berlin' } });  
      });
  
      then('the element should expand', () => {
        expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(2);  
      });
    });
  
  
    test('User can collapse an event to hide its details', ({ given, and, when, then }) => {
      let AppWrapper;
      given('user has opened the event element', () => {
        AppWrapper = await mount(<App />);
        AppWrapper.find('.city').simulate('change', { target: { value: 'Berlin' } });  
      });
  
      when('the user clicks to collapse the event element', () => {
        AppWrapper.find('.suggestions li').at(0).simulate('click');  
      });
  
      then('the elememt hides the info to make room for other event elements', () => {
        const CitySearchWrapper = AppWrapper.find(CitySearch);
        expect(CitySearchWrapper.state('query')).toBe('Berlin, Germany');  
      });
    });
  });