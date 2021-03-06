import { Given, Then, When } from "cucumber";
import { browser, by, element } from "protractor";
import { CommonFunctions } from "../../../support/commonFunctions";
import { CommonComponent } from "./commonComponent";

const commonComponent: CommonComponent = new CommonComponent();

Then(/^I should see the (.*) button$/, async (buttonText: string) => {
    await CommonFunctions.validateButtonIsVisible(buttonText);
});

Then(/^I should see the button Save & Continue is (disabled|enabled)$/, async (expectedState: string) => {
    await commonComponent.validateSaveAndContinueButtonState(expectedState);
});

When(/^I click on (.*) button$/, async (buttonText: string) => {
    await CommonFunctions.clickButton(buttonText);
});

Then(/^I should see the following buttons are visible: (.*)$/, async (buttonTextList: string) => {
   await commonComponent.validateListOfButtonsAreVisible(buttonTextList);
});