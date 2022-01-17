import { Given, Then, When } from "cucumber";
import { CommonFunctions } from "../../../support/commonFunctions";
import { EntityTypePage } from "./entityTypePage";

const entityTypePage: EntityTypePage= new EntityTypePage();

    
Then(/^I should see Entity Type Page is displayed$/, async () => {
    await entityTypePage.confirmPageHasLoaded();
});

Then(/^I should see the button (Save & Continue) in Entity Type Page$/, async(buttonText:string)=>{
    await CommonFunctions.validateButtonIsVisible(buttonText);
});
       
When(/^I click on (Save & Continue) button in Entity Type Page$/, async(buttonText:string)=>{
    await CommonFunctions.clickButton(buttonText);
});

When(/^I select (Independent Contractor|Sole Proprietorship|General Partnership|Limited Partnership) option for Entity Type$/, async (optionToSelect: string) => {
    await entityTypePage.selectEntityTypeOption(optionToSelect);
});

Then(/^I should see the Business Entity Type selection dropdown$/, async()=>{
    await entityTypePage.validateEntityTypeDropdownIsVisible();
});
