import { Given, When, Then } from "cucumber";

import pause from '../../features/helpers/pause.helper.js';

When(
    /^I pause for (\d+)ms$/,
    pause
);