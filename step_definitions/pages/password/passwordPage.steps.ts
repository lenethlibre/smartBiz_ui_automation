import { Given, Then, When } from "cucumber";
import { CommonFunctions } from "../../../support/commonFunctions";
import {PasswordPage } from "./passwordPage";

const passwordPage:PasswordPage= new PasswordPage();
    
Then(/^I should see the Password Page is displayed$/, async () => {
    await passwordPage.confirmPageHasLoaded();
});

When(/^I enter the password (.*) in Password Page$/, async (password: string) => {
    await passwordPage.setPasswordTextInput(password);
});



