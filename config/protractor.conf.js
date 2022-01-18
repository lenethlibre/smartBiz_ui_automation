'use strict';

let protractor = require('protractor');
const fs = require('fs-extra');

/**
 * Define variables to control configuration
 * @type {string}
 */

let environment;
let args;
let chromeDriver;
let directConnect = false;
let sharding = true;
let maxShards = 3;
let testSuite;
let deviceName;
let osName;
let osVersion;
let date = new Date();
let runDateTime = date.toLocaleDateString() + "  " + date.toLocaleTimeString();

/**
 * Set variables to control configuration based on defined environment in package.json scripts
 */

if (process.env.TEST_ENV === 'test') {
    environment = 'test';
    args = ['--no-sandbox', '--headless', '--disable-infobars', '--window-size=1920,1080', '--disable-gpu'];
}else{
    args = ['--no-sandbox', '--headless', '--disable-infobars', '--window-size=1920,1080', '--disable-gpu'];
}

if (typeof process.env.TEST_SUITE == 'undefined') {
    testSuite = 'Smoke';
} else {
    testSuite = process.env.TEST_SUITE;
}

if (testSuite === 'WIP' || process.env.MAX_SHARDS == '1') {
    sharding = false;
}

if (typeof process.env.MAX_SHARDS !== 'undefined') {
    maxShards = process.env.MAX_SHARDS;
}

if (typeof process.env.DEVICE_NAME == 'undefined') {
    deviceName = 'local';
} else {
    deviceName = process.env.DEVICE_NAME;
}

if (typeof process.env.OS_NAME == 'undefined') {
    osName = 'WINDOWS';
} else {
    osName = process.env.OS_NAME;
}

if (typeof process.env.OS_VERSION == 'undefined') {
    osVersion = '10.14.6';
} else {
    deviceName = process.env.OS_VERSION;
}


console.log('\n======================================================================================================');
console.log('\n                 Running against the ' + environment + ' environment.\n');
console.log('Test Suite: ' + testSuite);
console.log('Sharding: ' + sharding.toString());
console.log('Max Shards: ' + maxShards.toString());
console.log('Chrome Direct Connect: ' + directConnect.toString());
console.log('Chrome Options Arguments: ' + args);
console.log('Device Name: ' + deviceName);
console.log('OS Name: ' + osName);
console.log('OS Version: ' + osVersion);
console.log('Run Date/Time: ' + runDateTime + '\n');
console.log('======================================================================================================\n');


exports.config = {

    /**
     * Sets global parameters callable by protractor browser function
     */
    params: {
        environment: environment,
        pageLoadTimeout: (30 * 1000),
        pageLoadFailMessage: "The Page could not be confirmed as loaded, " +
            "please verify the method to load this page is correctly configured",
        emailAddressSuffix:  date.getFullYear() + "_" + date.getMonth() + "_" + date.getDate() + "_"  + Math.floor((Math.random()*10000) + 1)
    },

    /**
     * Direct Connect only used in docker builds
     */
    directConnect: directConnect,

    /**
     * Chrome Driver path only defined in docker builds
     */
    chromeDriver: chromeDriver,

    /**
     * Sets the browser options for single or parallel runs
     */
    multiCapabilities: [
        {
            browserName: 'chrome',
            chromeOptions: {
                args: args,
                prefs: {
                    // 0 - Default, 1 - Allow, 2 - Block
                    "profile.default_content_setting_values.geolocation": 1
                },
            },
            acceptInsecureCerts: true,
            shardTestFiles: sharding,
            maxInstances: maxShards,
            deviceProperties: {
                browser: {
                    name: 'Chrome',
                    version: 'latest'
                },
                device: deviceName,
                platform: {
                    name: osName,
                    version: osVersion
                }
            }
        }
    ],

    /**
     * Protractor specific
     */
    allScriptsTimeout: 300000,
    disableChecks: true,

    /**
     * CucumberJS specific
     */
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        compiler: 'ts:ts-node/register',
        require: ['../typeScript/step_definitions/**/**/*.steps.js', '../typeScript/support/*.js'],
        format: [require.resolve('cucumber-pretty'), 'json:.tmp/' + Date.now() + '.json'],
        strict: true,
        tags: "@" + testSuite
    },

    specs: [
        '../**/*.feature',
    ],

    /**
     * Pulls baseUrl information from environment specific data files and sets window size
     */
    onPrepare: () => {
       
        browser.manage().window().maximize();
        browser.waitForAngularEnabled(false);
    },


    /**
     * From `protractor-cucumber-framework`, allows cucumber to handle the 199
     * exception and record it appropriately
     */
    ignoreUncaughtExceptions: true,
    plugins: [
        {
            package: 'protractor-multiple-cucumber-html-reporter-plugin',
            options: {
                automaticallyGenerateReport: true,
                metadataKey: 'deviceProperties',
                removeExistingJsonReportFile: true,
                removeOriginalJsonReportFile: true,
                disableLog: false,
                customData: {
                    title: 'Test Run Information',
                    data: [
                        {label: 'Project', value: 'UI Tests'},
                        {label: 'Release', value: '1.0.0'},
                        {label: 'Environment', value: environment},
                        {label: 'Test Suite', value: testSuite},
                        {label: 'Date', value: runDateTime}
                    ]
                },
                displayDuration: true,
                reportName: 'Automation Report',
                pageTitle: 'SmartBiz',
                pageFooter: '<div><p></p></div>',
                openReportInBrowser: !sharding
            }
        },
        /**
         * The new plugin for finding elements by css easier
         */
        {
            package: "protractor-css-booster"
        }
    ]
};
