import { Given, When, Then } from "cucumber";
import axios from "axios";
import getEnvVar from "../../utils/env.js";
import { dataStore } from "../stores/dataStore";
import MyAccountPage from "../pageobjects/myAccount.page.js";

// const axios = require('axios').default;
// const request = require("request");

Given(/^I navigate to the My Account page$/, () => {
  MyAccountPage.open();
  expect(browser.getUrl()).to.equals(getEnvVar(process.env.MVR_ENV, "host"));
});

Given(/^I click to the sign in area from the sign up area$/, () => {
  MyAccountPage.signinSwitch.click();
});

When(/^I store a valid voucher code$/, () => {
  const validVoucherCode = browser.call(() => {
    const getVoucher = async () => {
      var config = {
        method: "post",
        url: "https://ext-opal-api-dev.studio.immersiv.es/vouchers",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": "MelodyOpalTest20CharactersMin",
        },
      };
      try {
        return await axios(config);
      } catch (error) {
        console.error(error);
      }
    };
    const seeVoucher = async () => {
      const response = await getVoucher();
      return response.data.code;
    };
    return seeVoucher();
  });

  dataStore.validVoucher = validVoucherCode;
});

Then(/^the title is "([^"]*)?"$/, (title) => {
  expect(title).to.equals(browser.getTitle());
});

Then(/^I can see the sign up page title text$/, () => {
  expect(MyAccountPage.pageTitleText.isExisting()).to.equals(true);
    expect(MyAccountPage.pageTitleText.getText()).to.include(
      "Create your account");
      
    expect(MyAccountPage.pageTitleText.getText()).to.include(
      "Create your MelodyVR account or sign into your existing account here."
    );
});

Then(/^I can see the sign in page title text$/, () => {
  expect(MyAccountPage.pageTitleText.isExisting()).to.equals(true);
    expect(MyAccountPage.pageTitleText.getText()).to.include("Welcome back");
    expect(MyAccountPage.pageTitleText.getText()).to.include(
      "Sign in to your MelodyVR account."
    );
});

Then(/^I can see the GDPR banner$/, () => {
  expect(MyAccountPage.gdprBanner.isExisting()).to.equals(true);
  expect(MyAccountPage.gdprBanner.getText()).to.equals(
    "We use cookies to ensure that we give you the best experience on our website. If you decide to proceed without changing your settings we assume you are happy to receive all cookies on the MelodyVR website.More info|I accept"
  );
});

Then(/^I can see the GDPR acknowledgement option$/, () => {
  expect(MyAccountPage.gdprAccept.isExisting()).to.equals(true);
  expect(MyAccountPage.gdprAccept.getText()).to.equals("I accept");
});

Then(/^I can accept the use of cookies$/, () => {
  MyAccountPage.gdprAccept.waitForExist();
  MyAccountPage.gdprAccept.click();
  expect(MyAccountPage.gdprAccept.isExisting()).to.equals(false);
});

Then(/^I can see the signin options$/, () => {
  expect(MyAccountPage.signinOptionsWrapper.isExisting()).to.equals(true);
});

Then(/^I can see the signin_signup switch$/, () => {
  expect(MyAccountPage.signinSwitch.isExisting()).to.equals(true);
  // THIS IS SOMETHING THAT NEEDS TO BE DEFINED - WHAT IS THE ACTUAL PAGE IS EXPECTED TO LAND ON
});

Then(
  /^I can see option "([^"]*)?" in position ([^"]*)?$/,
  (option, position) => {
    expect(MyAccountPage.signinOptions[`${position - 1}`].getText()).to.equals(
      option
    );
  }
);
