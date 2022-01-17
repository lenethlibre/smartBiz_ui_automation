import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserUtility } from "../../../support/browserUtility";
import { CommonFunctions } from "../../../support/commonFunctions";


export class FinancingNeedsPage {
    private financingNeedsPageSubHeader: ElementFinder;
    private saveAndContinueButton: ElementFinder;
    private trustScore: ElementFinder;


    constructor() {
        this.financingNeedsPageSubHeader = element(by.xpath("//h1[@class='page-subheader-zilla']"));
        this.saveAndContinueButton = element(by.id('financial_needs_new_prequal'));
        this.trustScore = element(by.id('trust-score'));
    }

    public async confirmPageHasLoaded() {
        await browser.wait(ExpectedConditions.visibilityOf(this.financingNeedsPageSubHeader), browser.params.pageLoadTimeout,
        "Financing Page header is not visible");
        return browser.wait(ExpectedConditions.textToBePresentInElement(this.financingNeedsPageSubHeader, "First, how soon do you need funding?"), browser.params.pageLoadTimeout,
            "Financing Needs Page is not loaded");
    }
}