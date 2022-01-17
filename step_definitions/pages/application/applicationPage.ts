import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserUtility } from "../../../support/browserUtility";
import { CommonFunctions } from "../../../support/commonFunctions";


export class ApplicationPage {
    private applicationPageHeader: ElementFinder;
    private buildMyBusinessIcon: ElementFinder;
    private firstNameTextInput: ElementFinder;
    private lastNameTextInput: ElementFinder;
    private emailTextInput: ElementFinder;
    private phoneNumberTextInput: ElementFinder;
    private businessNameTextInput: ElementFinder;
    private preQualifyButton: ElementFinder;
    private sbaLoanSelector: ElementFinder;
    private howDidYouHearAboutUsDropDown: ElementFinder;
    private privacyPolicyCheckbox: ElementFinder;

    constructor() {
        this.applicationPageHeader = element(by.css('.page-header-zilla'));
        this.buildMyBusinessIcon = element(by.css('.working_capital'));
        this.firstNameTextInput = element(by.css('#first_name'));
        this.lastNameTextInput = element(by.css('#last_name'));
        this.emailTextInput = element(by.css('#email'));
        this.phoneNumberTextInput = element(by.css('#phone'));
        this.businessNameTextInput = element(by.css('#legal_business_name'));
        this.preQualifyButton = element(by.css('#submit_apply_form'));
        this.sbaLoanSelector = element(by.xpath("//h3[.='SBA Loan']"));
        this.howDidYouHearAboutUsDropDown = element(by.css('#referral_source'));
        this.privacyPolicyCheckbox = element(by.css('#privacy_policy'));
    }

    public async confirmPageHasLoaded() {
        return browser.wait(ExpectedConditions.textToBePresentInElement(this.applicationPageHeader, "The right financing. The right bank loan."), browser.params.pageLoadTimeout,
            "Application Page is not loaded");
    }

    public async clickBuildMyBusinessIcon() {
        return this.buildMyBusinessIcon.click();
    }

    public async setTextInput(textInputToSet: string, value: string) {
        var locator: ElementFinder;

        switch (textInputToSet) {
            case "First Name":
                locator = this.firstNameTextInput;
                break;
            case "Last Name":
                locator = this.lastNameTextInput;
                break;
            case "Email":
                locator = this.emailTextInput;
                break;
            case "Phone Number":
                locator = this.phoneNumberTextInput;
                break;
            case "Business Name":
                locator = this.businessNameTextInput;
                break;
            default:
                throw new Error("Provided string does not have corresponding case to continue, check spelling in scenario and step def");
        }
        await browser.wait(ExpectedConditions.elementToBeClickable(locator), browser.params.pageLoadTimeout,
            textInputToSet + " is not clickable");
        return locator.sendKeys(value);
    }

    public async preQualifyButtonState(expectedState: string) {
        await CommonFunctions.validateButtonState(expectedState,this.preQualifyButton);
    }

    public async clickSBALoanSelector() {
        await BrowserUtility.pageScrollToObject(this.sbaLoanSelector);
        await browser.wait(ExpectedConditions.elementToBeClickable(this.sbaLoanSelector), browser.params.pageLoadTimeout,
            "SBA Loan selector is not clickable");
        return this.sbaLoanSelector.click();
    }

    public async selectHowDidYouHearAboutUsDropDown(optionToSelect: string) {
       return CommonFunctions.selectDropDownOption(optionToSelect, this.howDidYouHearAboutUsDropDown)
    }

    public async clickPrivacyPolicyCheckBox() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.privacyPolicyCheckbox), browser.params.pageLoadTimeout,
            "Privacy Policy Checkbox is not clickable");
        return this.privacyPolicyCheckbox.click();
    }

    public async clickPrequalifyButton() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.preQualifyButton), browser.params.pageLoadTimeout,
            "Pre Qualify button is not clickable");
        return this.preQualifyButton.click();
    }





}