import { Given, Then, When } from "cucumber";
import { PreLoanPage } from "./preLoanPage";

const preLoanPage: PreLoanPage= new PreLoanPage();

    
Given(/^I should see Pre Loans Page is displayed$/, async () => {
    await preLoanPage.confirmPageHasLoaded();
});

