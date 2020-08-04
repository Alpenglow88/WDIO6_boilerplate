const {
  dataStore
} = require("../..//features/stores/dataStore.js");

// const axios = require('axios').default;

const request = require('request');
const fs = require('fs');


class ValidVoucherGenerator {


  ValidVoucherGenerator() {
   
    request('https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49', function (error, response, body) {
    //   console.error('error:', error); // Print the error if one occurred
    //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //   console.log('body:', body); // Print the HTML for the Google homepage.
    
      const body1 = JSON.parse(body)

      const json = `{
        "title": "${body1.title}"
      }`

      fs.writeFile('./features/stores/validVoucher.json', json, function (err) {
        if (err) return console.log(err);
        dataStore.validVoucher = body1.title

      });

    });

    }}
  module.exports = new ValidVoucherGenerator()


