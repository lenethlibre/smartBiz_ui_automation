import { browser } from "protractor";

export class BrowserUtility{


    public static async pageScrollToObject(pageElement: object){
        // return browser.executeScript("arguments[0].scrollIntoView({block: \"center\",inline: \"center\",behavior: \"smooth\"});",pageElement);
        return browser.executeScript("arguments[0].scrollIntoViewIfNeeded(true);",pageElement);
    }

}