import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserUtility } from "../../../support/browserUtility";
import { CommonFunctions } from "../../../support/commonFunctions";


export class InceptionDatePage {
    private inceptionDatePageHeader: ElementFinder;
    private saveAndContinueButton: ElementFinder;


    constructor() {
        this.inceptionDatePageHeader = element(by.xpath("//h1[@class='page-subheader-zilla']"));
        this.saveAndContinueButton = element(by.id('password_new_prequal'));
    }

    public async confirmPageHasLoaded() {
        await browser.wait(ExpectedConditions.visibilityOf(this.inceptionDatePageHeader), browser.params.pageLoadTimeout,
        "Inception Date Page is not loaded")
        return browser.wait(ExpectedConditions.textToBePresentInElement(this.inceptionDatePageHeader, "get started?"), browser.params.pageLoadTimeout,
            "Inception Date Page is not loaded");
    }

    public async validateSaveAndContinueButtonState(expectedState: string) {
        return CommonFunctions.validateButtonState(expectedState,this.saveAndContinueButton);
    }

}