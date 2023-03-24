Feature: Sign up to the worksapce

Background: navigate to homepage
    Given user navigates to the website

Scenario: sign up and create worksapce
    When user clicks on "Login" header menu item
    Then verify login page is opened
    When user clicks on "Sign Up" link
    And user inputs "test78@test.com" email to start free trial
    And user confirms account creation
    And user inputs "Re Ops" name to start free trial
    And user confirms account creation
    And user inputs "randomde8574Tex7tString108!" password to start free trial
    And user accepts terms and conditions
    And user submits data for account creation
    Then verify "Start reading with a 7-day free trial" page is opened
    When user click on logo
    Then verify home page is opened