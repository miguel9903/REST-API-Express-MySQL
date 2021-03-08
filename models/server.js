"use strict";
exports.__esModule = true;
var express_1 = require("express");
var RestServer = /** @class */ (function () {
    function RestServer() {
        this.app = express_1["default"]();
        this.port = process.env.PORT || '3000';
        this.userRoutes = '/api/users/';
    }
    RestServer.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log('App listening on port ' + _this.port);
        });
    };
    RestServer.prototype.routes = function () {
    };
    return RestServer;
}());
exports["default"] = RestServer;
