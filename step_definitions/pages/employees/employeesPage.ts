import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserUtility } from "../../../support/browserUtility";
import { CommonFunctions } from "../../../support/commonFunctions";


export class EmployeesPage {
    private employeesPageSubHeader: ElementFinder;

    constructor() {
        this.employeesPageSubHeader = element(by.xpath("//h1[@class='page-subheader-zilla']"));
    }

    public async confirmPageHasLoaded() {
        await browser.wait(ExpectedConditions.visibilityOf(this.employeesPageSubHeader), browser.params.pageLoadTimeout,
        "Financing Page header is not visible");
        return browser.wait(ExpectedConditions.textToBePresentInElement(this.employeesPageSubHeader, "How many full time employees do you have?"), browser.params.pageLoadTimeout,
            "Employees Page is not loaded");
    }
}