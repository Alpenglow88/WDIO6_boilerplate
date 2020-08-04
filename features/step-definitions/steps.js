const { Given, When, Then } = require("cucumber");
const getEnvVar = require("../../utils/env.js");
const { dataStore } = require("../stores/dataStore");
// const axios = require('axios').default;
// const request = require("request");

const SigninPage = require("../pageobjects/signin.page.js");

const ValidVoucherGenerator = require("../helpers/validVoucherGenerator.helper.js");

Given(/^I navigate to the Signin page$/, () => {
  SigninPage.open();
  expect(browser.getUrl()).to.equals(getEnvVar(process.env.MVR_ENV, "host"));
});

When(/^A valid voucher is generated$/, () => {
  // const hello = JSON.parse(ValidVoucherGenerator.ValidVoucherGenerator())
  // console.log(ValidVoucherGenerator.ValidVoucherGenerator())
  // title = JSON.parse(validVoucher)
  return request(
    "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    function (error, response, body) {
      //   console.error('error:', error); // Print the error if one occurred
      //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      //   console.log('body:', body); // Print the HTML for the Google homepage.
    }
  );
  console.log(body);
});

Then(/^I can see it$/, () => {
  console.log(ValidVoucherGenerator.ValidVoucherGenerator);
});

Then(/^the title is "([^"]*)?"$/, (title) => {
  expect(title).to.equals(browser.getTitle());
});

Then(/^I can see the page title text$/, () => {
  expect(SigninPage.pageTitleText.isExisting()).to.equals(true);
  expect(SigninPage.pageTitleText.getText()).to.include("Create your account");
  expect(SigninPage.pageTitleText.getText()).to.include(
    "Create your MelodyVR account or sign into your existing account here."
  );
});

Then(/^I can see the GDPR banner$/, () => {
  expect(SigninPage.gdprBanner.isExisting()).to.equals(true);
  expect(SigninPage.gdprBanner.getText()).to.equals(
    "We use cookies to ensure that we give you the best experience on our website. If you decide to proceed without changing your settings we assume you are happy to receive all cookies on the MelodyVR website.More info|I accept"
  );
});

Then(/^I can see the GDPR acknowledgement option$/, () => {
  expect(SigninPage.gdprAccept.isExisting()).to.equals(true);
  expect(SigninPage.gdprAccept.getText()).to.equals("I accept");
});

Then(/^I can accept the use of cookies$/, () => {
  SigninPage.gdprAccept.waitForExist();
  SigninPage.gdprAccept.click();
  expect(SigninPage.gdprAccept.isExisting()).to.equals(false);
});

Then(/^I can see the signin options$/, () => {
  expect(SigninPage.signinOptionsWrapper.isExisting()).to.equals(true);
});

Then(/^I can see the signin switch$/, () => {
  console.log(SigninPage.signinSwitch.getText());
  expect(SigninPage.signinSwitch.isExisting()).to.equals(true);
  // THIS IS SOMETHING THAT NEEDS TO BE DEFINED - WHAT IS THE ACTUAL PAGE IS EXPECTED TO LAND ON
  expect(SigninPage.signinSwitch.getText()).to.equals(
    "Already have an account?"
  );
});

Then(
  /^I can see option "([^"]*)?" in position ([^"]*)?$/,
  (option, position) => {
    expect(SigninPage.signinOptions[`${position - 1}`].getText()).to.equals(
      option
    );
  }
);
