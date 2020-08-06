# **End-to-End testing README**

- [**End-to-End testing README**](#end-to-end-testing-readme)
  - [**Framework Setup**](#framework-setup)
  - [**Running Tests**](#running-tests)
    - [**Local testing**](#local-testing)
    - [**Development testing**](#development-testing)
    - [**Production testing**](#production-testing)
  - [**Reporting**](#reporting)
  - [**Writing Tests**](#writing-tests)

## **Framework Setup**

This end to end testing framework is built using Javascript with the following tools using the Page Object Model (POM):

- [WebdriverIO 6](https://webdriver.io/docs/api.html)
- [Chai assertion library](https://www.chaijs.com/)
- [Cucumber BDD](https://cucumber.io/) with [Gherkin syntax](https://cucumber.io/docs/gherkin/)
- [Cucumberjs-json-reporter](https://github.com/gkushang/cucumber-html-reporter)
- [Allure Reporter](http://allure.qatools.ru/)

It makes use of [Babel](https://babeljs.io/) for transpiling ES6 Javascript to usable ES5 Javascript, allowing development using either standard (however it is recommended to stick to ES6 for all future test code)

The main setup config file is the [wdio.config.js](wdio.conf.js) which sets out all the configurations for WebdriverIO. This is set to find all the test features and test code and run the tests.

Following the Gherkin syntax, the [features](./features) directory contains the features and the step definitions, as well as the page objects themselves.

The [utils folder](utils/) contains the environment file (for setting the test environment - URLs, username etc used in the E2E tests) as well as a custom commands file for storing any frequently used command chains (or even things that are just helpful to be modularised)

## **Running Tests**

Ensure you are in the root of the project directory. All tests have been setup to run with easy commands from the root package.json

Install node modules

    npm i

### **Local testing**

In order to run tests against a local build (a feature branch you are working on for instance) you will need to spin up the application in a separate terminal than the one you run tests in. This will by default target `http://localhost:3000` (see [env file](./utils/env.js) for mapping)

    yarn start //Open new terminal

    yarn local_e2

    OR

    npm run local_e2e

### **Development testing**

This will by default target the DEVELOPMENT Cloudfront URL (see [env file](./utils/env.js) for mapping)

    yarn dev_e2e

    OR

    npm run dev_e2e

### **Production testing**

This will by default target the PRODUCTION URL (see [env file](./utils/env.js) for mapping)

    yarn prod_e2e

    OR

    npm run prod_e2e

## **Reporting**

This framework uses several different reporting tools. These are for different reasons but because each tool is useful for different things. It also allows us to future proof to some degree.

When the tests have been run you will see the spec reporter in the terminal (along with the dot reporter)
These are both easy to read from the terminal and give a nice quick overview of the state of the testing. This can get unwieldy if the test suite grows too much but that is not a problem right now.

You will also see in the terminal, a link to an html generated report. This is a good way of visualising the state of the testing and can be handed to various other people including non-technical stakeholders.

**NOTE**: A known issue with this html reporter is the lack of screenshots on failures. This is something that can be looked at in future work but for now, you can match up any failures seen by scenario to the screenshots that are stored in their own folder(This folder is ignored by git so you will not see it in the clean repo but it will appear at `./E2E/reports/screenshots`)

Allure is another reporter that we can use. This is a bit more heavy weight and is more for future proofing but you can generate a report from the **latest test run only** using the following

    yarn generate_e2e_allure_report

    OR

    npm run generate_e2e_allure_report

This will spin up a java application from the generated files and automatically open it for viewing. This can be used in the future to push to an S3 bucket (or similar) that can be easily shared with technical and non-technical stakeholders as needed.

**NOTE**: The reports folder that is generated (but not Git tracked) will fill up with a report every time you run a test run. If you are running these a lot then remember to clean out the reports folder other wise you will fill up your local machine and run into problems.

## **Writing Tests**

Writing features can be the job of anybody, as long as they use the Gherkin syntax

    Feature: Google Search

     I want Google search to function as expected with user input

    Scenario: Get a search results value back from Google
        Given I enter 'hello world' into the search bar
        When I search in Google
        Then I get a list of search results returned

Using the preset commands listed [here](./features/step-definitions/available_steps.md), you can construct feature files that will work "out of the box". This list can be handed to non-technical stakeholders who wish to write feature tickets so ensure that this list is kept up to date as you write future steps. The QA team will assist in committing boilerplate steps whenever they can.

In order to write new step definitions simply follow the format in the current [steps](./features/step-definitions) using the [WDIO API](https://webdriver.io/docs/api.html) and the [Chai assertion library](https://www.chaijs.com/api/).

For assistance, please contact the QA department 😉
