// THIS FILE MUST REMAIN ES5 MNOT ES6 AS THIS IS LOADED INTO
// THE WDIO.CONFIG WHICH IS WHERE BABEL IS CALLED

const _get = require("lodash.get");

const map = {
  local: {
    host: "http://localhost:3000/",
  },

  dev: {
    host: "https://d3fy76nl7jc4sj.cloudfront.net/",
  },

  prod: {
    host: "https://myaccount.melodyvr.com/",
  },
};

module.exports = (env = "dev", path) => {
  if (path) {
    return _get(map[env], path);
  }
  return map[env];
};
