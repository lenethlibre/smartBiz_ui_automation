import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { EnableDisableRulesWalker } from "ts-lint";

export class LoginPage {
    private loginPageHeader: ElementFinder;
    private emailTextInput: ElementFinder;
    private passwordTextInput:ElementFinder;
  
   
    constructor() {
        this.loginPageHeader = element(by.css('.page-header-zilla'));
        this.emailTextInput = element(by.id('email'));
        this.passwordTextInput = element(by.id('password'));

    }

    public async confirmPageHasLoaded() {
        await browser.wait(ExpectedConditions.visibilityOf(this.loginPageHeader), browser.params.pageLoadTimeout,
        "Login Page header is not visible");
        return browser.wait(ExpectedConditions.textToBePresentInElement(this.loginPageHeader, "Welcome Back!"), browser.params.pageLoadTimeout,
            "Login Page is not loaded");
    }

    public async setTextInput(textInputToSet: string, value: string) {
        var locator: ElementFinder;

        switch (textInputToSet) {
            case "Email":
                locator = this.emailTextInput;
                break;
            case "Password":
                locator = this.passwordTextInput;
                break;
            default:
                throw new Error("Provided string does not have corresponding case to continue, check spelling in scenario and step def");
        }
        await browser.wait(ExpectedConditions.elementToBeClickable(locator), browser.params.pageLoadTimeout,
            textInputToSet + " is not clickable");
        return locator.sendKeys(value);
    }


}