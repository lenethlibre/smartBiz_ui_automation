import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserUtility } from "../../../support/browserUtility";
import { CommonFunctions } from "../../../support/commonFunctions";


export class EntityTypePage {
    private entityTypePageHeader: ElementFinder;
    private saveAndContinueButton: ElementFinder;
    private entityTypeDropDown: ElementFinder;


    constructor() {
        this.entityTypePageHeader = element(by.xpath("//h1[@class='page-subheader-zilla']"));
        this.saveAndContinueButton = element(by.id('password_new_prequal'));
        this.entityTypeDropDown = element(by.id('entity_type_id'));
    }

    public async confirmPageHasLoaded() {
        await browser.wait(ExpectedConditions.visibilityOf(this.entityTypePageHeader), browser.params.pageLoadTimeout,
        "Entity Type Page is not loaded")
        return browser.wait(ExpectedConditions.textToBePresentInElement(this.entityTypePageHeader, "What is your business entity type?"), browser.params.pageLoadTimeout,
            "Entity Type Page is not loaded");
    }

    public async validateSaveAndContinueButtonState(expectedState: string) {
        return CommonFunctions.validateButtonState(expectedState, this.saveAndContinueButton);
    }

    public async validateEntityTypeDropdownIsVisible() {
        return browser.wait(ExpectedConditions.visibilityOf(this.entityTypeDropDown), browser.params.pageLoadTimeout,
            "Business Type Dropdown is not visible");
    }
    
    public async selectEntityTypeOption(optionToSelect: string ){
        return CommonFunctions.selectDropDownOption(optionToSelect, this.entityTypeDropDown)
    } 




   

}