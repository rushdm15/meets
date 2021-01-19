import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import { extractLocations } from '../api';

const feature = loadFeature('./src/features/filterEventsByCity.feature');

defineFeature(feature, test => {
    test('When user hasnt searched for a city, show upcoming events from all cities.', ({ given, when, then }) => {
      given('user hasn’t searched for any city', () => {
  
      });
        AppWrapper = mount(<App />);
      });
  
      then('the user should see the list of upcoming events', () => {
      });
    });
  
    test('User should see a list of suggestions when they search for a city', ({ given, when, then }) => {
        given('the main page is open', () => {
      });
  
      when('user starts typing in the city textbox', () => {
      });
  
      then('the user should receive a list of cities (suggestions) that match what they’ve typed', () => {
      });
    });
  
  
    test('User can select a city from the suggested list', ({ given, and, when, then }) => {
      given('user was typing “Berlin” in the city textbox', async () => {
        AppWrapper = await mount(<App />);
        AppWrapper.find('.city').simulate('change', { target: { value: 'Berlin' } });  
      });
  
      and('the list of suggested cities is showing', () => {
      });
  
      when('the user selects a city (e.g., “Berlin, Germany”) from the list', () => {
      });
  
      then('their city should be changed to that city (i.e., “Berlin, Germany”)', () => {
      });
  
      and('the user should receive a list of upcoming events in that city', () => {
      });
    });
  });