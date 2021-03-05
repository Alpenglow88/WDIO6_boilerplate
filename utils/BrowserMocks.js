/* eslint-disable no-undef */

/**
 * A singelton facade allowing us to store mocks and restore them all
 * at a global level within a wdio.conf event handler
 */

class BrowserMocks {
    constructor () {
      this.mocks = []
    }
  
    addMock (url, filterOptions) {
      const mock = browser.mock(url, filterOptions)
      this.mocks.push(mock)
      return mock
    }
  
    restoreAllMocks () {
      this.mocks.forEach(mock => {
        mock.restore()
      })
  
      this.mocks = []
    }
  }
  
  const mock = new BrowserMocks()
  
  module.exports = mock
  