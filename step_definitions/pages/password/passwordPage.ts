import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserUtility } from "../../../support/browserUtility";
import { CommonFunctions } from "../../../support/commonFunctions";


export class PasswordPage {
    private PasswordPageSubHeader: ElementFinder;
    private createPasswordTextInput: ElementFinder;
  
    constructor() {
        this.PasswordPageSubHeader = element(by.xpath("//h1[@class='page-subheader-zilla']"));
        this.createPasswordTextInput = element(by.id('password'));
    }

    public async confirmPageHasLoaded() {
        await browser.wait(ExpectedConditions.visibilityOf(this.PasswordPageSubHeader), browser.params.pageLoadTimeout,
        "Password Page header is not visible");
        return browser.wait(ExpectedConditions.textToBePresentInElement(this.PasswordPageSubHeader, "Great! Let’s save your progress."), browser.params.pageLoadTimeout,
            "Password Page is not loaded");
    }

    public async setPasswordTextInput(password: string) {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.createPasswordTextInput), browser.params.pageLoadTimeout,
            "Password text input is not clickable");
        return this.createPasswordTextInput.sendKeys(password);
    }

 

    

}