import { Given, Then, When } from "cucumber";
import { browser } from "protractor";
import { UrlUtility } from "../../../support/urlUtility";
import { ApplicationPage } from "./applicationPage";

const applicationPage: ApplicationPage = new ApplicationPage();

Given(/^I navigate to the Smartbiz Loans site$/, async () => {
    await UrlUtility.navigateToSite();
});

Then(/^I should see the application page$/, async () => {
    await applicationPage.confirmPageHasLoaded();
});

Then(/^I should see that the prequalify button is (disabled|enabled)$/, async (expectedState: string) => {
    await applicationPage.preQualifyButtonState(expectedState);
});

When(/^I select Build my business or refinance an existing debt$/, async () => {
    await applicationPage.clickBuildMyBusinessIcon();
});

When(/^I select SBA loan$/, async () => {
    await applicationPage.clickSBALoanSelector();
});

When(/^I fill up Step 3 with  (.*), (.*), (.*), (.*) and an email that starts with (.*)$/, async (firstName, lastName, phoneNumber, businessName, emailAddressPreFix) => {
    let emailAddress = emailAddressPreFix + browser.params.emailAddressSuffix  +"@smartbizloans.com"
    console.log("emailAddress: " + emailAddress);
    await applicationPage.setTextInput("First Name", firstName)
    await applicationPage.setTextInput("Last Name", lastName)
    await applicationPage.setTextInput("Email", emailAddress)
    await applicationPage.setTextInput("Phone Number", phoneNumber)
    await applicationPage.setTextInput("Business Name", businessName)
});

When(/^I select (Blog or news article|Online search|Magazine Ad) for How did you hear about us$/, async (optionToSelect: string) => {
    await applicationPage.selectHowDidYouHearAboutUsDropDown(optionToSelect);
});

When(/^I check Accept Terms and conditions checkbox$/, async () => {
    await applicationPage.clickPrivacyPolicyCheckBox();
});

When(/^I click Continue to pre-qualify button$/, async () => {
    await applicationPage.clickPrequalifyButton();
});

