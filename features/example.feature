Feature: Example Feature Title

  Background: Background will be run before each scenario below
    Given Example GIVEN test step

  Scenario: Basic scenario
    When Example WHEN test step
    Then Example THEN test step

  Scenario: Scenario with 1 regex value
    Then Example with Regex "This is the regex value you provided"

  Scenario Outline: Scenario outline with 1 regex and 1 integer value
    Then Example with 2 "<regex_string>" Regex values <regex_integer>

    Examples:
      | regex_string        | regex_integer |
      | First regex string  | 1             |
      | Second regex string | 2             |
      | Third regex string  | 3             |

  Scenario: Mocked 400 response on Google - view in browser to verify
    Then Example mocking 400 response