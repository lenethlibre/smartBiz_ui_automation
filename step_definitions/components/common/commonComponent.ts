import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { CommonFunctions } from "../../../support/commonFunctions";


export class CommonComponent {
    
    constructor() {
    }

    public async validateSaveAndContinueButtonState(expectedState: string){
        let saveAndContinueButtonLocator = element(by.id('password_new_prequal'));
        let currentURL = await browser.getCurrentUrl();
        if(currentURL.includes('financing_needs')){
           saveAndContinueButtonLocator = element(by.id('financial_needs_new_prequal'));
        }
        return CommonFunctions.validateButtonState(expectedState,saveAndContinueButtonLocator);
    }

    

}