import { Given, Then, When } from "cucumber";
import { CommonFunctions } from "../../../support/commonFunctions";
import { AnnualRevenuePage } from "./annualRevenuePage";

const annualRevenuePage: AnnualRevenuePage= new AnnualRevenuePage();
    
Then(/^I should see Annual Revenue Page is displayed$/, async () => {
    await annualRevenuePage.confirmPageHasLoaded();
});

