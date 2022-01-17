import { Given, Then, When } from "cucumber";
import { UrlUtility } from "../../support/urlUtility";

const urlUtility: UrlUtility = new UrlUtility();

Then(/^I should see that the url contains (.*)$/, async (partialExpectedURL: string) => {
    await urlUtility.validateURLContains(partialExpectedURL);
});