exports.config = {
  runner: "local",
  port: 4723,
  host: "localhost",
  path: "/wd/hub",
  logLevel: "info",
  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    require: ["@babel/register"],
    timeout: 60000,
  },
  // wdio.conf.js
  // featureFlags: {
  //     specFiltering: true
  // },
  maxInstances: 1,
  sync: true,
  specs: [
    // './PlayWithMocha.js'
    // './example/click.js'
    // './example/setValue.js'
    // './example/addValue.js'
    // './example/getValue.js'
    // './example/switchBtn.js'
    // './example/waitForDisplayed.js'
    // './example/saveScreenShot.js'
    "./example/swipeVertical1.js",
    // './example/swipeHorizontal.js'
  ],
  capabilities: [
    {
      platformName: "Android",
      deviceName: "Android Test",
      automationName: "UiAutomator2",
      platformVersion: "9",
      udid: "emulator-5554",
      appPackage: "com.wdiodemoapp",
      appActivity: ".MainActivity",
    },
  ],
};
