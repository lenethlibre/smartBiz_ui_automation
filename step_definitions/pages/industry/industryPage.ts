import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserUtility } from "../../../support/browserUtility";
import { CommonFunctions } from "../../../support/commonFunctions";


export class IndustryPage {
    private industryPageHeader: ElementFinder;
    private saveAndContinueButton: ElementFinder;
    private businessTypeDropDown: ElementFinder;

    constructor() {
        this.industryPageHeader = element(by.xpath("//h1[@class='page-subheader-zilla']"));
        this.businessTypeDropDown = element(by.id('business_type_id'));
    }

    public async confirmPageHasLoaded() {
        await browser.wait(ExpectedConditions.visibilityOf(this.industryPageHeader), browser.params.pageLoadTimeout,
        "Industry Page is not loaded")
        return browser.wait(ExpectedConditions.textToBePresentInElement(this.industryPageHeader, "What is your business industry?"), browser.params.pageLoadTimeout,
            "Industry Page is not loaded");
    }

    public async validateBusinessTypeDropDownIsVisible() {
        return browser.wait(ExpectedConditions.visibilityOf(this.businessTypeDropDown), browser.params.pageLoadTimeout,
            "Business Type Dropdown is not visible");
    }
    
    public async selectBusinessTypeOption(optionToSelect: string ){
        return CommonFunctions.selectDropDownOption(optionToSelect, this.businessTypeDropDown)
    } 




   

}