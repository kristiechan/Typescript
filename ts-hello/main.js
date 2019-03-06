"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var like_component_1 = require("./like.component");
var point = new point_1.Point(1, 2);
point.draw();
var component = new like_component_1.LikeComponent(10, true);
component.onClick();
