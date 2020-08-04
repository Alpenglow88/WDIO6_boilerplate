// THIS FILE MUST REMAIN ES5 NOT ES6 AS THIS IS LOADED INTO
// THE WDIO.CONFIG WHICH IS WHERE BABEL IS CALLED

class reportDate {
  reportDate() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const readableDate =
      day + "-" + month + "-" + year + "-" + hours + minutes + seconds;
    return readableDate;
  }
}
module.exports = new reportDate();
