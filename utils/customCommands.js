// THIS IS IN HERE AS A DEMONSTRATION FOR ADDING NEW CUSTOM COMMANDS
// CURRENTLY THIS RESIZE WORKS FOR A LOWER VERSION OF WDIO AND SO 
// WILL NOT WORK FOR THIS TOOL.
// THIS IS HIGH ON THE TODO LIST!

module.exports = {
  create: () => {
    const defaultWait = 750;
    const defaultTimeout = 30000;
    const maxRetries = 3;



    
    browser.addCommand('resize', size => {
      switch (size) {
        case 'mobile':
          console.log('resizing the page to mobile dimensions');
          browser.windowHandleSize({
            height: 980,
            width: 375
          });
          break;
        case 'tablet':
          console.log('resizing the page to tablet dimensions');
          browser.windowHandleSize({
            height: 1024,
            width: 768
          });
          break;
        default:
          console.log('resizing the page to desktop dimensions');
          browser.windowHandleSize({
            height: 2000,
            width: 1440
          });
          break;
      }
    });

  }
};
