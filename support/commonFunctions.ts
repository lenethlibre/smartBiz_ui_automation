import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserUtility } from "./browserUtility";

export class CommonFunctions {
    public static async clickButton(buttonText: string) {
        let footerLocator = element(by.css('footer'));
        let buttonLocator = element(by.xpath("//*[contains(text(), \"" + buttonText + "\")]"));
        await browser.wait(ExpectedConditions.elementToBeClickable(buttonLocator), browser.params.pageLoadTimeout,
            buttonText + " button is not clickable");
        if(!buttonText.includes("Let's get started")){
            BrowserUtility.pageScrollToObject(footerLocator);    
        }       
        return buttonLocator.click();
    }

    public static async validateButtonIsVisible(buttonText: string) {
        let buttonLocator = element(by.xpath("//*[contains(text(), '" + buttonText + "')]"));
        return browser.wait(ExpectedConditions.elementToBeClickable(buttonLocator), browser.params.pageLoadTimeout,
            buttonText + " button is not visible");
        
    }

    public static async validateButtonState(expectedState: string, buttonLocator: ElementFinder) {
        await browser.sleep(2000); //isEnable doesnt work for this element , hence i need to use some sleep to make sure the state is updated.
        let classAttribute = await buttonLocator.getAttribute('class');
        let actualState = 'enabled';
        if (classAttribute.includes('disabled')) {
            actualState = 'disabled';
        }
        if (expectedState!== actualState) {
            throw new Error("Save and Continue button expected state: " + expectedState + ". is not equal to actual state :" + actualState +".");
        }
    }

    public static async selectDropDownOption(optionToSelect: string, dropDownLocator: ElementFinder) {
        let footerLocator = element(by.css('footer'));
        let optionLocator = element(by.xpath("//option[contains(text(), '" + optionToSelect + "')]"));
        BrowserUtility.pageScrollToObject(footerLocator);
        await browser.wait(ExpectedConditions.elementToBeClickable(dropDownLocator), browser.params.pageLoadTimeout,
            "DropDown is not clickable");
        await dropDownLocator.click();
        await browser.wait(ExpectedConditions.elementToBeClickable(optionLocator), browser.params.pageLoadTimeout,
            "Option Locator is not clickable");
        await optionLocator.click();
        return dropDownLocator.click();
    }
}