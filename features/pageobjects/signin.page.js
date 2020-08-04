// Leaving this blank here will just use the BaseURL from the wdio.conf.js.
// using '/<url_path>' will apphend to the Base URL
const Url = "";

import Page from "./page.js";

class SigninPage extends Page {
  get pageTitleText() {
    return $('[class="mb-3"]');
  }

  get gdprBanner() {
    return $('[class="gdpr-container"]');
  }

  get gdprAccept() {
    return $('[data-testid="Gdpr_ACCEPT"]');
  }

  get signinOptionsWrapper() {
    return $('[data-testid="SignInButtons_WRAPPER"]');
  }

  get signinOptions() {
    return $$('[data-testid="SignInButtons_WRAPPER"] [class="btn btn-primary"]');
  }

  get signinSwitch() {
    return $('[data-testid="SignInButtons_SIGN_IN_SWITCH"]');
  }

  open() {
    super.open(`${Url}`);
  }
}
export default new SigninPage();
