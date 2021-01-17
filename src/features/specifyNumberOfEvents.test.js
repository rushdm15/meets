import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/filterEventsByCity.feature');

defineFeature(feature, test => {
    test('When user hasnt specified a number, 32 is the default number', ({ given, when, then }) => {
      given('that a user hasnt specified the number of events per page', () => {
  
      });
  
      when('the user searches for events', () => {
  
      });
  
      then('32 event elements will display on the page', () => {
  
      });
    });
  
    test('User can change the number of events they want to see', ({ given, when, then }) => {
      given('the user wants to specify the number of events', () => {
  
      });
  
      when('the user clicks on the filter option', () => {
  
      });
  
      then('there should be a dial button to limit the number of events', () => {
  
      });
    });
  });