// Leaving this blank here will just use the BaseURL from the wdio.conf.js.
// using '/<url_path>' will append to the Base URL
const Url = "";

import Page from "./page.js";

class MyNewPage extends Page {
  get singleClassElementSelector() {
    return $('[class="the-class-name"]');
  }

  get customElementSelector() {
    return $('[data-test_id="custom-selector-name"]');
  }

  get nestedElementSelector() {
    return $$(
      '[data-testid="wanted-div-WRAPPER"] [class="nested-selector-name"]'
    );
  }

  open() {
    super.open(`${Url}`);
  }
}
export default new MyNewPage();
