Feature: Filters application for a book search

Background: navigate to homepage
    Given user navigates to the website

Scenario: search for a book with some filters applied
    When user clicks on "Discover" header menu item
    Then verify "Browse by Topic" subpage is opened
    When user selects a browsing category "Economics"
    Then verify "Economics" page is opened
    And verify pagination returns "4" pages be deafult
    When user searches for text "Invest"
    And user filters by publishers
    And user selects "European" publisher
    Then verify "European Investment Bank" page is opened
    When user filters by "Topic"
    Then verify "Topic" filter modal is opened
    When user searches for a "Architecture" topic
    And user clears the topic search
    Then verify topic search input was cleared sucessfully
    When user searches for a "Ecology" topic
    And user clicks on "Ecology" topic
    Then verify applied filter returns "4" books
