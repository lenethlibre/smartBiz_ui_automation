import { Given, Then, When } from "cucumber";
import { browser } from "protractor";
import { CommonFunctions } from "../../../support/commonFunctions";
import {LoginPage } from "./loginPage";

const loginPage:LoginPage= new LoginPage();
    
Then(/^I should see the Login Page is displayed$/, async () => {
    await loginPage.confirmPageHasLoaded();
});

Then(/^I enter generated email address that starts with (.*)$/, async (emailAddressPreFix: string) => {
    let emailAddress = emailAddressPreFix + browser.params.emailAddressSuffix  +"@smartbizloans.com";
    await loginPage.setTextInput("Email",emailAddress);
});

When(/^I enter the password (.*) in Login Page$/, async (password: string) => {
    await loginPage.setTextInput("Password",password);
});









