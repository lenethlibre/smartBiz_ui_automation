import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserUtility } from "../../../support/browserUtility";

export class AddressPage {
  private addressPageHeader: ElementFinder;
  private addressTextInput: ElementFinder;
  private footerLocator:ElementFinder;
  

  constructor() {
    this.addressPageHeader = element(by.xpath("//h1[@class='page-subheader-zilla']"));
    this.addressTextInput = element(by.id('street'));
    this.footerLocator = element(by.css('footer'));
  }

  public async confirmPageHasLoaded() {
    await browser.wait(ExpectedConditions.visibilityOf(this.addressPageHeader), browser.params.pageLoadTimeout,
      "Address Page is not loaded")
    return browser.wait(ExpectedConditions.textToBePresentInElement(this.addressPageHeader, "Where is your business located?"), browser.params.pageLoadTimeout,
      "Text Where is your business located? is not found");
  }

  public async setAddress(address: string) {
    let addressToSelect = element(by.xpath("//div[@id='PlacesAutocomplete__root']//div[contains(text(),  \"" + address + "\")]"));
    BrowserUtility.pageScrollToObject(this.footerLocator);
    await browser.wait(ExpectedConditions.elementToBeClickable(this.addressTextInput), browser.params.pageLoadTimeout,
      "Address text input is not clickable");
    await this.addressTextInput.sendKeys(address);
    await browser.wait(ExpectedConditions.elementToBeClickable(addressToSelect), browser.params.pageLoadTimeout,
      "Address Autocomplete is not clickable");
    return addressToSelect.click();
  }






}