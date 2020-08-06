Feature: Sign Up Page First navigation

  Background: Sign Up Page Navigation
    Given I navigate to the My Account page

  Scenario: As a user, I can open the Dev URL
    Then the title is "MelodyVR - My Account"

  Scenario: Page Title
    Then I can see the sign up page title text

  Scenario: GDPR Banner
    Then I can see the GDPR banner
    And I can see the GDPR acknowledgement option
    And I can accept the use of cookies

  Scenario: Sign up Options Wrapper
    Then I can see the signin options

  Scenario Outline: Sign up Options and Their Positions
    Then I can see option "<Option>" in position <Position>

    Examples:
      | Option   | Position |
      | Facebook | 1        |
      | Email    | 2        |
      | Twitter  | 3        |


  Scenario: Sign in Switch to Sign In
    Then I can see the signin_signup switch
    When I store a valid voucher code
    