// Import the wanted cucumber expressions depending on the desired step definition file structure
import { Given, When, Then } from "cucumber";
// Import - Axios is a promise based HTTP client
import axios from "axios";
// Import the environment variable so it can be used to verify URLs or whatever else is defined there
import getEnvVar from "../../utils/env.js";
// Import dataStore for use in testing steps
import { dataStore } from "../stores/dataStore";
// Importing all relevant page objects in this fashion
import MyNewPage from "../page_objects/myNewPage.page.js";

///////////////////////
// Test steps can be Given/When/Then as needed

Given(/^Example GIVEN test step$/, () => {
  // INSERT TEST CODE HERE
  console.log("The example GIVEN test step has run");
});

When(/^Example WHEN test step$/, () => {
  // INSERT TEST CODE HERE
  console.log("The WHEN test step has run");
});

// Test steps can be Given/When/Then as needed
Then(/^Example THEN test step$/, () => {
  // INSERT TEST CODE HERE
  console.log("The THEN test step has run");
});

Then(/^Example with Regex "([^"]*)?"$/, (regex) => {
  // INSERT TEST CODE HERE
  console.log("The THEN REGEX test step has run");
  console.log(regex);
});

Then(/^Example with 2 "([^"]*)?" Regex values ([^"]*)?$/, (regex1, regex2) => {
  // INSERT TEST CODE HERE
  console.log("The THEN Multi REGEX test step has run");
  console.log(regex1);
  console.log(regex2);
});

// Example with pipe values - this allows specification of terminology in test step to be more relaxed and/or allow for different use cases if needed
Then(/^Example with pipe values (Pipe|AnotherPipe)$/, () => {
  // INSERT TEST CODE HERE
});

// Example of a negative option test step - the negative step in this case is a helper function to check URL
Then(/^I expect that the url is( not)* "([^"]*)?"$/, () => {
  // INSERT TEST CODE HERE
})

// A useful example of using Axios for promise based HTTP calls
When(
  /^Example Axios Call getting a voucher code - result stored in the dataStore$/,
  () => {
    const validVoucherCode = browser.call(() => {
      const getVoucher = async () => {
        var config = {
          method: "post",
          url: "https://vouchercodebackend.com/vouchers",
          headers: {
            "Content-Type": "application/json",
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
  }
);
