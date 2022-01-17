import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";

export class AddressPage {
  private addressPageHeader: ElementFinder;
  private addressTextInput: ElementFinder;
  private listBox: ElementFinder;

  constructor() {
    this.addressPageHeader = element(by.xpath("//h1[@class='page-subheader-zilla']"));
    this.addressTextInput = element(by.id('street'));
    this.listBox = element(by.xpath("//div[@id='PlacesAutocomplete__root']//div"));
  }

  public async confirmPageHasLoaded() {
    await browser.wait(ExpectedConditions.visibilityOf(this.addressPageHeader), browser.params.pageLoadTimeout,
      "Address Page is not loaded")
    return browser.wait(ExpectedConditions.textToBePresentInElement(this.addressPageHeader, "Where is your business located?"), browser.params.pageLoadTimeout,
      "Text Where is your business located? is not found");
  }

  public async setAddress(address: string) {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.addressTextInput), browser.params.pageLoadTimeout,
      "Address text input is not clickable");
    await this.addressTextInput.sendKeys(address);
    await browser.wait(ExpectedConditions.elementToBeClickable(this.listBox), browser.params.pageLoadTimeout,
      "ListBox is not clickable");
    await browser.sleep(3000);
    return this.listBox.click();
  }






}