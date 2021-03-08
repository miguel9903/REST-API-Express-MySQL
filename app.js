"use strict";
exports.__esModule = true;
var dotenv_1 = require("dotenv");
var server_1 = require("./models/server");
// Config dotenv
dotenv_1["default"].config();
// Create and start server
var server = new server_1["default"]();
server.listen();
