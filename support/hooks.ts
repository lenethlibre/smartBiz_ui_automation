import {browser} from "protractor";

const {BeforeAll, After, AfterAll, Status, setDefaultTimeout, Before} = require("cucumber");

// BeforeAll({timeout: 40 * 1000}, async () => {
//     // Set default timeout for Cucumber hooks
//     setDefaultTimeout(40 * 1000);
// });

Before({timeout: 40 * 1000}, async () => {
    // Set default timeout for Cucumber hooks
    setDefaultTimeout(40 * 1000);
});

After(async function (scenario) {
    if (scenario.result.status === Status.PASSED) {
        // screenShot is a base-64 encoded PNG
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    } else if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    }
});

After(function() {

    // Locate current test browser
    function getWindowLocation() {
        return window.location;
    }

    // Clear storage for current test browser
    function clearStorage() {
        window.sessionStorage.clear();
        window.localStorage.clear();
    }

    // Execute browser window location and clear storage if session exists
    return browser.executeScript(getWindowLocation).then(function(location): Promise<void> | any {
        // NB If no page is loaded in the scenario then calling clearStorage will cause exception
        // so guard against this by checking hostname (If no page loaded then hostname == '')
        if (location["hostname"].length > 0) {
            return browser.executeScript(clearStorage);
        }
        else {
            return Promise.resolve();
        }
    });
});

// After all scenarios complete kill any remaining browser instances
// AfterAll({timeout: 100 * 1000}, async () => {
//     await browser.quit();
// });
