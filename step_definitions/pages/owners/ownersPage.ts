import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { EnableDisableRulesWalker } from "ts-lint";

export class OwnersPage {
    private ownersPageSubHeader: ElementFinder;
    private logOutLink: ElementFinder;
    private signMeOutButton: ElementFinder;
   
    constructor() {
        this.ownersPageSubHeader = element(by.xpath("//h1[@class='page-subheader-zilla']"));
        this.logOutLink = element(by.id('logout-link'));
        this.signMeOutButton = element(by.xpath('//a[contains(text(), "Yes, sign me out")]'));

    }

    public async confirmPageHasLoaded() {
        await browser.wait(ExpectedConditions.visibilityOf(this.ownersPageSubHeader), browser.params.pageLoadTimeout,
        "Owners Page header is not visible");
        return browser.wait(ExpectedConditions.textToBePresentInElement(this.ownersPageSubHeader, "We've helped small businesses get funded with over $9 billion in SBA 7(a), PPP, and bank term loans."), browser.params.pageLoadTimeout,
            "Owners Page is not loaded");
    }

    public async validateFirstNameIsDisplayed(firstName: string) {
        return browser.wait(ExpectedConditions.textToBePresentInElement(this.ownersPageSubHeader, firstName), browser.params.pageLoadTimeout,
           firstName + "is not displayed");
    }

    public async clickLogoutLink() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.logOutLink), browser.params.pageLoadTimeout,
        "LogOut is not clickable");
        return this.logOutLink.click();
    }

    public async clickSignMeOutButton() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.signMeOutButton), browser.params.pageLoadTimeout,
        "Yes, sign me out button is not clickable");
        return this.signMeOutButton.click();
    }


}