import { Given, Then, When } from "cucumber";
import { CommonFunctions } from "../../../support/commonFunctions";
import { IndustryPage } from "./industryPage";

const industryPage: IndustryPage= new IndustryPage();

    
Then(/^I should see Industry Page is displayed$/, async () => {
    await industryPage.confirmPageHasLoaded();
});

Then(/^I should see the button (Save & Continue) in Industry Page$/, async(buttonText:string)=>{
    await CommonFunctions.validateButtonIsVisible(buttonText);
});
       
When(/^I click on (Save & Continue) button in Industry Page$/, async(buttonText:string)=>{
    await CommonFunctions.clickButton(buttonText);
});

When(/^I select (Administrative and Business Services|Construction|Manufacturing|Holding Companies) option for Business Type$/, async (optionToSelect: string) => {
    await industryPage.selectBusinessTypeOption(optionToSelect);
});

Then(/^I should see the Business Industry selection dropdown$/, async()=>{
    await industryPage.validateBusinessTypeDropDownIsVisible();
});
