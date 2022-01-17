import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { CommonFunctions } from "../../../support/commonFunctions";


export class CommonComponent {

    constructor() {
    }

    public async validateSaveAndContinueButtonState(expectedState: string) {
        let saveAndContinueButtonLocator = element(by.id('password_new_prequal'));
        let currentURL = await browser.getCurrentUrl();
        if (currentURL.includes('financing_needs')) {
            saveAndContinueButtonLocator = await element(by.id('financial_needs_new_prequal'));
        }
        return CommonFunctions.validateButtonState(expectedState, saveAndContinueButtonLocator);
    }

    public async validateListOfButtonsAreVisible(expectedButtons: string) {
        return element.all(by.className('bordered-selector-label cursor-pointer no-icon')).getText().then(function(actualButtons) {     
            if (!actualButtons.toString().includes(expectedButtons)) {
                throw new Error("Expected Buttons: " + expectedButtons + ". is not equal to actual buttons: " + actualButtons + ".");
            }
        });  
    }
}