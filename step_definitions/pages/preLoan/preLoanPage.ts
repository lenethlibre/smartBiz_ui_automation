import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";


export class PreLoanPage {
    private preLoanPageHeader: ElementFinder;
    private letsGetStartedButton: ElementFinder;


    constructor() {
        this.preLoanPageHeader = element(by.xpath("//h2[@class='section-header-opensans font--light']"));
        this.letsGetStartedButton = element(by.id('apply_loading'));

    }

    public async confirmPageHasLoaded() {
        await browser.wait(ExpectedConditions.visibilityOf(this.preLoanPageHeader));
        return browser.wait(ExpectedConditions.textToBePresentInElement(this.preLoanPageHeader, "We know you’re busy—this takes less than 5 minutes!"), browser.params.pageLoadTimeout,
        "Pre Loan Page is not loaded");;
    }

    public async clickLetsGetStartedButton() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.letsGetStartedButton), browser.params.pageLoadTimeout,
        "Lets Get Started Button is not clickable");
        return this.letsGetStartedButton.click();
    }
}