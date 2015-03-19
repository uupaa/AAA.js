// AAA test

onmessage = function(event) {
    self.TEST_DATA = event.data;
    self.TEST_ERROR_MESSAGE = "";

    if (!self.console) {
        self.console = function() {};
        self.console.log = function() {};
        self.console.warn = function() {};
        self.console.error = function() {};
    }

    importScripts("../node_modules/uupaa.spec.js/lib/SpecCatalog.js");
    importScripts("../node_modules/uupaa.spec.js/lib/Spec.js");
    importScripts(".././test/wmtools.js");
    importScripts("../lib/AAA.js");
    importScripts("../lib/HeartBeat.js");
    importScripts("../lib/UserTimeline.js");
    importScripts("../lib/Pingerprint.js");
    importScripts("../release/AAA.w.min.js");
    importScripts("./testcase.js");

    self.postMessage({ TEST_ERROR_MESSAGE: self.TEST_ERROR_MESSAGE || "" });
};

