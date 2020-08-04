Feature: Sign In Page First navigation

  Background: Sign In Page Navigation
    Given I navigate to the Signin page

  Scenario: As a user, I can open the Dev URL
    Then the title is "MelodyVR - My Account"

  Scenario: Page Title
    Then I can see the page title text

  Scenario: GDPR Banner
    Then I can see the GDPR banner
    And I can see the GDPR acknowledgement option
    And I can accept the use of cookies

  Scenario: Sign in Options Wrapper
    Then I can see the signin options

  Scenario Outline: Sign in Options and Their Positions
    Then I can see option "<Option>" in position <Position>

    Examples:
      | Option   | Position |
      | Facebook | 1        |
      | Email    | 2        |
      | Twitter  | 3        |


  Scenario: Sign in Switch to Sign Up
    Then I can see the signin switch






# Scenario: Valid Voucher
# When A valid voucher is generated
# Then I can see it