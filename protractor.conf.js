

exports.config = {
  allScriptsTimeout: 11000,
  noResolve: false,
  specs: [
     './e2e/test/testScript-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome',
    'browserName': 'firefox'
  },
  directConnect: true,
  framework: 'jasmine2',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 60000,
    print: function() {}
  },
  useAllAngular2AppRoots: true,
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e'
    });
  },
 
  onPrepare: function() {
        return global.browser.getProcessedConfig().then(function (config) {
 
        });
  }
};