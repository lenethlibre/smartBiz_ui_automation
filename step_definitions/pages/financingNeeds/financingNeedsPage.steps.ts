import { Given, Then, When } from "cucumber";
import { CommonFunctions } from "../../../support/commonFunctions";
import { FinancingNeedsPage } from "./financingNeeds";

const financingNeedsPage: FinancingNeedsPage= new FinancingNeedsPage();
    
Then(/^I should see Financing Needs Page is displayed$/, async () => {
    await financingNeedsPage.confirmPageHasLoaded();
});

