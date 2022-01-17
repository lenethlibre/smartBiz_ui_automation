import {browser} from 'protractor';

export class UrlUtility {

    private static async urlBuilder() {
        let finalURL;
        let env = process.env.TEST_ENV;

        switch (env) {
            case 'test': {
                finalURL = 'https://qa-app02.smartbizloans.com/apply?partner_id=smartbiz';
                break;
            }
            default: {
                finalURL = 'https://qa-app02.smartbizloans.com/apply?partner_id=smartbiz';
            }

        }
        return finalURL;
    }

    public static async navigateToSite() {
        let siteURl = await this.urlBuilder();
        await browser.get(siteURl);        
        await browser.waitForAngularEnabled(false);
    }

    public async validateURLContains(partialExpectedURL: string){
        let actualURL = await browser.getCurrentUrl();
        if(!actualURL.includes(partialExpectedURL)){
            throw new Error("Actual URL: " + actualURL + " does not include partial expected URL: " + partialExpectedURL);
        }
    }
}
