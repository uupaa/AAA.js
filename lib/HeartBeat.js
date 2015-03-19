var global = (this || 0).self || global;

global["HEART_BEAT"] = function(global) {
    "use strict";

    // --- dependency modules ----------------------------------
    // --- define / local variables ----------------------------
    //var _isNodeOrNodeWebKit = !!global.global;
    //var _runOnNodeWebKit =  _isNodeOrNodeWebKit &&  /native/.test(setTimeout);
    //var _runOnNode       =  _isNodeOrNodeWebKit && !/native/.test(setTimeout);
    //var _runOnWorker     = !_isNodeOrNodeWebKit && "WorkerLocation" in global;
    //var _runOnBrowser    = !_isNodeOrNodeWebKit && "document" in global;

    var PULSE_INTERVAL = 30 * 1000;
    var lastTimeStamp = 0;

    // --- class / interfaces ----------------------------------
    function HeartBeat(callback) { // @arg Function - callback({ type: "HeartBeat" });
        this._watchdog = callback;
        this._tick     = _tick.bind(this);
        this._tid      = setInterval(this._tick, PULSE_INTERVAL);

        if (lastTimeStamp) { throw new Error("duplicate running"); }
        lastTimeStamp = Date.now();

        if (HeartBeat["secure"]) {
            Object.freeze(this);
        }
    }

    HeartBeat["secure"] = true;

    // --- implements ------------------------------------------
    function _tick() {
        var timeStamp = Date.now();
        var deltaTime = timeStamp = lastTimeStamp;

        if (deltaTime < PULSE_INTERVAL &&
            deltaTime > PULSE_INTERVAL * 2) {
            this._watchdog({ "type": "HeartBeat" });
        }
        lastTimeStamp = timeStamp;
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
        module["exports"] = HeartBeat;
    }
    global["HeartBeat" in global ? "HeartBeat_" : "HeartBeat"] = HeartBeat;
};

debugger;

global["HEART_BEAT"]( (this || 0).self || global );

Object.freeze(global["HEART_BEAT"]);

global["HEART_BEAT"] = 123;

