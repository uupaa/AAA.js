var ModuleTestAAA = (function(global) {

var _isNodeOrNodeWebKit = !!global.global;
var _runOnNodeWebKit =  _isNodeOrNodeWebKit &&  /native/.test(setTimeout);
var _runOnNode       =  _isNodeOrNodeWebKit && !/native/.test(setTimeout);
var _runOnWorker     = !_isNodeOrNodeWebKit && "WorkerLocation" in global;
var _runOnBrowser    = !_isNodeOrNodeWebKit && "document" in global;

var test = new Test("AAA", {
        disable:    false, // disable all tests.
        browser:    true,  // enable browser test.
        worker:     true,  // enable worker test.
        node:       true,  // enable node test.
        nw:         true,  // enable nw.js test.
        button:     true,  // show button.
        both:       true,  // test the primary and secondary modules.
        ignoreError:false, // ignore error.
    }).add([
        testSecure,
    ]);

var spec = new Spec();
var heartBeat = new HeartBeat(function(type) {
    alert(type);
});
var fingerprint = new Fingerprint(spec);



// --- test cases ------------------------------------------
function testSecure(test, pass, miss) {

debugger;
    console.log( HEART_BEAT );
    HEART_BEAT = function() { alert("HOGE"); };

    HEART_BEAT();

/*
    var obj = fingerprint.value;

debugger;
        test.done(pass());
 */
}

return test.run().clone();

})((this || 0).self || global);

