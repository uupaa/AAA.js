(function(global) {
"use strict";

// --- dependency modules ----------------------------------
// --- define / local variables ----------------------------
//var _isNodeOrNodeWebKit = !!global.global;
//var _runOnNodeWebKit =  _isNodeOrNodeWebKit &&  /native/.test(setTimeout);
//var _runOnNode       =  _isNodeOrNodeWebKit && !/native/.test(setTimeout);
//var _runOnWorker     = !_isNodeOrNodeWebKit && "WorkerLocation" in global;
//var _runOnBrowser    = !_isNodeOrNodeWebKit && "document" in global;

// --- class / interfaces ----------------------------------
function Fingerprint(spec) { // @arg Spec
    this._canvas = spec["CANVAS_FINGERPRINT"];
    this._gpu = spec["GPU_FINGERPRINT"];

    if (Fingerprint["secure"]) {
        Object.freeze(this);
    }
}

Fingerprint["secure"] = true;

Fingerprint["prototype"] = Object.create(Fingerprint, {
    "constructor":  { "value": Fingerprint },
    "value":        { "get":   function() {
                        return { "CANVAS": this._canvas, "GPU": this._gpu };
                    } },
});

// --- implements ------------------------------------------
// --- validate / assertions -------------------------------
//{@dev
//function $valid(val, fn, hint) { if (global["Valid"]) { global["Valid"](val, fn, hint); } }
//function $type(obj, type) { return global["Valid"] ? global["Valid"].type(obj, type) : true; }
//function $keys(obj, str) { return global["Valid"] ? global["Valid"].keys(obj, str) : true; }
//function $some(val, str, ignore) { return global["Valid"] ? global["Valid"].some(val, str, ignore) : true; }
//function $args(fn, args) { if (global["Valid"]) { global["Valid"].args(fn, args); } }
//}@dev

// --- exports ---------------------------------------------
if (typeof module !== "undefined") {
    module["exports"] = Fingerprint;
}
global["Fingerprint" in global ? "Fingerprint_" : "Fingerprint"] = Fingerprint;

})((this || 0).self || global);

