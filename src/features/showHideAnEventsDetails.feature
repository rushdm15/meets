Feature: SHOW/HIDE AN EVENTS DETAILS

    Scenario: An event element is collapsed by default
        Given the user hasn't opened the element
        When the user is on the events page
        Then the elements are closed to allow more room for events

    Scenario: User can expand an event to see its details
        Given app loaded
        And the list of events has been loaded
        When the user clicks on the event element
        Then the element should expand

    Scenario: User can collapse an event to hide its details
        Given the user has opened the event element
        When the user clicks to collapse the event element
        Then the elememt hides the info to make room for other event elements