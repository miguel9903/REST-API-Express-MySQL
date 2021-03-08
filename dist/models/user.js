"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
const User = connection_1.default.define('User', {
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    lastname: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    age: {
        type: sequelize_1.DataTypes.NUMBER
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
});
exports.default = User;
//# sourceMappingURL=user.js.map