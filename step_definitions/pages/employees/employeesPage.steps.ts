import { Given, Then, When } from "cucumber";
import { CommonFunctions } from "../../../support/commonFunctions";
import { EmployeesPage } from "./employeesPage";

const employeesPage: EmployeesPage= new EmployeesPage();
    
Then(/^I should see Employees Page is displayed$/, async () => {
    await employeesPage.confirmPageHasLoaded();
});