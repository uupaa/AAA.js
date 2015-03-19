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
function AAA(value) { // @arg String = "" - comment
    this._value = value || "";
}

//{@dev
AAA["repository"] = "https://github.com/uupaa/AAA.js"; // GitHub repository URL. http://git.io/Help
//}@dev

AAA["prototype"] = Object.create(AAA, {
    "constructor":  { "value": AAA          },  // new AAA(value:String = ""):AAA
    // property accessor
    "value": {                                              // AAA#value:String
        "set": function(v) { this._value = v; },
        "get": function()  { return this._value; }
    },
    // methods
    "concat":       { "value": AAA_concat   },  // AAA#concat(a:String):String
    "concat$":      { "value": AAA_concat$  },  // AAA#concat$(a:String):this
});

// --- implements ------------------------------------------
function AAA_concat(a) { // @arg String
                                     // @ret String
    return this._value + a;
}

function AAA_concat$(a) { // @arg String
                                      // @ret this
    this._value += a;
    return this;
}

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
    module["exports"] = AAA;
}
global["AAA" in global ? "AAA_" : "AAA"] = AAA; // switch module. http://git.io/Minify

})((this || 0).self || global); // WebModule idiom. http://git.io/WebModule

