Feature: Communications Preferences
  As a CAF member who is transitioning
  I want to be able to edit my communication preferences
  So that I can be communicated regarding my transition based on my preferences

  Background:
    Given I am logged in

  Scenario: Communications Preferences Navigation
    Given I am on the main page
    When I click on the navigation for preferences
    Then I am provided with "Communications" preferences

  Scenario: Communications Preferences Cancel Edited Field
    Given I am on preferences page in edit mode
    When I modify one of the fields
    And I click on cancel
    Then I am directed to preferences view page
    And The field I modified has the value before my modification

  Scenario: Communications Preferences Save Edited Field
    Given I am on preferences page in edit mode
    When I modify one of the fields
    And I click on save
    Then I am directed to preferences view page
    And The field I modified has the value of my modification
