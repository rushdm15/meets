import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import CitySearch from '../CitySearch';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default', ({ given, when, then }) => {
      });

      when('the user is on the events page', () => {
      });
  
      then('the elements are closed to allow more room for events', () => {
      });
    });
  
    test('User can expand an event to see its details', ({ given, when, then }) => {
    });
  
      when('the user clicks on the event element', () => {
      });
  
      then('the element should expand', () => {
      });
    });
  
  
    test('User can collapse an event to hide its details', ({ given, and, when, then }) => {
      });
  
      when('the user clicks to collapse the event element', () => {
      });
  
      then('the elememt hides the info to make room for other event elements', () => {
      });
    });
  });