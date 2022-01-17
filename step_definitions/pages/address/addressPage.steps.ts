import { Given, Then, When } from "cucumber";
import { AddressPage } from "./addressPage";

const addressPage: AddressPage= new AddressPage();
   
Then(/^I should see Address Page is displayed$/, async () => {
    await addressPage.confirmPageHasLoaded();
});

When(/^I enter address (.*) and select auto suggested option$/, async(address:string)=>{
    await addressPage.setAddress(address);
});
