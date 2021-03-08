"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../models/user"));
const userController = {
    getUsers: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const users = yield user_1.default.findAll();
            if (users.length === 0) {
                res.status(404).json({
                    message: "Not users found"
                });
            }
            else {
                res.json(users);
            }
        }
        catch (err) {
            res.status(500).json({
                message: "Failed to get users",
                error: err
            });
        }
    }),
    getUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const user = yield user_1.default.findByPk(id);
            res.json(user);
        }
        catch (err) {
            res.status(500).json({
                message: "Failed to get user",
                error: err
            });
        }
    }),
    createUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { name, lastname, email, age } = req.body;
            const userData = { name, lastname, email, age };
            const user = new user_1.default(userData);
            yield user.save();
            res.json({
                message: "User created",
                user
            });
        }
        catch (err) {
            res.status(500).json({
                message: "Failed to create user",
                error: err
            });
        }
    }),
    updateUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const { name, lastname, email, age } = req.body;
            const userData = { name, lastname, email, age };
            const user = yield user_1.default.findByPk(id);
            yield (user === null || user === void 0 ? void 0 : user.update(userData));
            res.json({
                message: "User updated",
                user
            });
        }
        catch (err) {
            res.status(500).json({
                message: "Failed to update user",
                error: err
            });
        }
    }),
    deleteUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const user = yield user_1.default.findByPk(id);
            yield (user === null || user === void 0 ? void 0 : user.update({ status: false }));
            res.json({
                message: "User deleted",
                user
            });
        }
        catch (err) {
            res.status(500).json({
                message: "Failed to delete user",
                error: err
            });
        }
    })
};
exports.default = userController;
//# sourceMappingURL=user.js.map