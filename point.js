"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Mark export for modules
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(Point.prototype, "x", {
        // This is properties
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    Point.prototype.draw = function () {
        console.log('X:' + this._y + ' , Y:' + this._y);
    };
    return Point;
}());
exports.Point = Point;
