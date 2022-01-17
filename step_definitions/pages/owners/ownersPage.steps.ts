import { Given, Then, When } from "cucumber";
import { CommonFunctions } from "../../../support/commonFunctions";
import {OwnersPage } from "./ownersPage";

const ownersPage:OwnersPage= new OwnersPage();
    
Then(/^I should see the Owners Page is displayed$/, async () => {
    await ownersPage.confirmPageHasLoaded();
});

When(/^I should see the applicants First Name: (.*) is displayed$/, async (firstName: string) => {
    await ownersPage.validateFirstNameIsDisplayed(firstName);
});

When(/^I click on the logout link$/, async () => {
    await ownersPage.clickLogoutLink();
});

When(/^I click Yes, sign me out button$/, async () => {
    await ownersPage.clickSignMeOutButton();
});



