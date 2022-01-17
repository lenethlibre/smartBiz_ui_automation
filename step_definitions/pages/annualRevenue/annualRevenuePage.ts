import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserUtility } from "../../../support/browserUtility";
import { CommonFunctions } from "../../../support/commonFunctions";


export class AnnualRevenuePage {
    private annualRevenuePageSubHeader: ElementFinder;
   
    constructor() {
        this.annualRevenuePageSubHeader = element(by.xpath("//h1[@class='page-subheader-zilla']"));
    }

    public async confirmPageHasLoaded() {
        await browser.wait(ExpectedConditions.visibilityOf(this.annualRevenuePageSubHeader), browser.params.pageLoadTimeout,
        "Financing Page header is not visible");
        return browser.wait(ExpectedConditions.textToBePresentInElement(this.annualRevenuePageSubHeader, "What’s your estimated annual revenue?"), browser.params.pageLoadTimeout,
            "AnnualRevenue Page is not loaded");
    }

    

}