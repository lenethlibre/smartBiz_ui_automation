import { Given, Then, When } from "cucumber";
import { CommonFunctions } from "../../../support/commonFunctions";
import { EmployeesPage } from "./employeesPage";

const employeesPage: EmployeesPage= new EmployeesPage();
    
Then(/^I should see Employees Page is displayed$/, async () => {
    await employeesPage.confirmPageHasLoaded();
});

Then(/^I should see the button (No employees – just me|1-5 employees|6-10 employees|11-20 employees|More than 20 employees) in Employees Page$/, async(buttonText:string)=>{
    await CommonFunctions.validateButtonIsVisible(buttonText);
});

When(/^I click on (No employees – just me|1-5 employees|6-10 employees|11-20 employees|More than 20 employees) button in Employees Page$/, async(buttonText:string)=>{
    await CommonFunctions.clickButton(buttonText);
});

When(/^I click on (Save & Continue) button in Employees Page$/, async(buttonText:string)=>{
    await CommonFunctions.clickButton(buttonText);
});