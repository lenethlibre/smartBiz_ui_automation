import { Given, Then, When } from "cucumber";
import { CommonFunctions } from "../../../support/commonFunctions";
import { InceptionDatePage } from "./inceptionDatePage";

const inceptionDatePage: InceptionDatePage= new InceptionDatePage();

    
Then(/^I should see Inception Date Page is displayed$/, async () => {
    await inceptionDatePage.confirmPageHasLoaded();
});

Then(/^I should see the button (Less than 2 years ago|2-5 years ago|6-10 years ago|More than 10 years ago|Save & Continue) in Inception Date Page$/, async(buttonText:string)=>{
    await CommonFunctions.validateButtonIsVisible(buttonText);
});

When(/^I click on (Less than 2 years ago|2-5 years ago|6-10 years ago|More than 10 years ago|Save & Continue) button in Inception Date Page$/, async(buttonText:string)=>{
    await CommonFunctions.clickButton(buttonText);
});
