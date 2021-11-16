@@ -3,11 +3,11 @@
 */


var PUZZLE_15 = PUZZLE_15 || {};
var JS_FIREWORKS = JS_FIREWORKS || {};

/**
 * @usage:
 *      firework = PUZZLE_15.Fireworks({
 *      firework = JS_FIREWORKS.Fireworks({
 *          id : 'fireworks-canvas',
 *          hue : 120,
 *          particleCount : 50,
@@ -28,18 +28,18 @@ var PUZZLE_15 = PUZZLE_15 || {};
 *      firework.start();
 *      firework.stop();
 */
PUZZLE_15.Fireworks = function (options) {
JS_FIREWORKS.Fireworks = function (options) {

    'use strict';

    if (!(this instanceof PUZZLE_15.Fireworks)) {
        return new PUZZLE_15.Fireworks(options);
 = function (options) {
/**
 * 
 */
PUZZLE_15.Firework = function (x1, y1, x2, y2, context, hue) {
JS_FIREWORKS.Firework = function (x1, y1, x2, y2, context, hue) {

    'use strict';

    if (!(this instanceof PUZZLE_15.Firework)) {
        return new PUZZLE_15.Firework(x1, y1, x2, y2, context, hue);
    if (!(this instanceof JS_FIREWORKS.Firework)) {
        return new JS_FIREWORKS.Firework(x1, y1, x2, y2, context, hue);
    }

    var _self     = this,
        _NS       = PUZZLE_15,
        _NS       = JS_FIREWORKS,
        _Class    = _NS.Firework,
        _proto    = _Class.prototype,
        _settings = PUZZLE_15.Fireworks.settings,
        _settings = JS_FIREWORKS.Fireworks.settings,
        _x   = x1,
        _y   = y1,
        _sx  = x1,
@@ -236,19 +236,19 @@ PUZZLE_15.Firework = function (x1, y1, x2, y2, context, hue) {
/**
 * 
 */
PUZZLE_15.Particle = function (x, y, context, hue) {
JS_FIREWORKS.Particle = function (x, y, context, hue) {

    'use strict';

    if (!(this instanceof PUZZLE_15.Particle)) {
        return new PUZZLE_15.Particle(x, y, context, hue);
    if (!(this instanceof JS_FIREWORKS.Particle)) {
        return new JS_FIREWORKS.Particle(x, y, context, hue);
    }

    var _self     = this,
        _NS       = PUZZLE_15,
        _NS       = JS_FIREWORKS,
        _Class    = _NS.Particle,
        _proto    = _Class.prototype,
        _settings = PUZZLE_15.Fireworks.settings,
        _settings = JS_FIREWORKS.Fireworks.settings,
        _x        = x,
        _y        = y,
        _ctx      = context,
@@ -304,3 +304,41 @@ PUZZLE_15.Particle = function (x, y, context, hue) {
    return _self;

};

/**
 * 
 */
JS_FIREWORKS.randomRange = function (min, max) {
    return (Math.random() * ( max - min ) + min);
};

/**
 * 
 */
JS_FIREWORKS.randomIntRange = function (min, max) {
    return JS_FIREWORKS.randomRange(min, max)|0;
};

/**
 * 
 */
JS_FIREWORKS.distance = function (x1, y1, x2, y2) {
    var pow = Math.pow;
    return Math.sqrt(pow(x1 - x2, 2) + pow(y1 - y2, 2));
};

/**
 * 
 */
JS_FIREWORKS.getRenderLoop = function () {
    return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame || 
        window.oRequestAnimationFrame || 
        window.msRequestAnimationFrame || 
        function (callback) { 
            return window.setTimeout(callback, 1000 / 60); 
        }
    );
};