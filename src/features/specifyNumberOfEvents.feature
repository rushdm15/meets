Feature 3: Specify number of events

As a user,
I should be able to specify the number of events,
So that I can filter events by number. 

Scenario: When user hasnâ€™t specified a number, 32 is the default number
Given that a user hasn't specified the number of events per page
When the user searches for events
Then 32 event elements will display on the page

Scenario: User can change the number of events they want to see
Given the user wants to specify the number of events
When the user clicks on the filter option
Then there should be a dial button to limit the number of events