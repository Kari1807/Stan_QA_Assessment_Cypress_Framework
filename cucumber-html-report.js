const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "cypress/cucumber-json",  // ** Path of .json file **//
    reportPath: "./reports/cucumber-html",
    metadata: {
        browser: {
            name: "chrome",
            version: "98",
        },
        device: "Local test machine",
        platform: {
            name: "windows",
            version: "10.0",
        },
    },
});