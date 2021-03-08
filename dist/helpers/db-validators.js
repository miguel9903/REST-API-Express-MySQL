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
exports.existUserEmail = exports.existUserId = void 0;
const user_1 = __importDefault(require("../models/user"));
const existUserId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existUser = yield user_1.default.findByPk(id);
    if (!existUser) {
        throw new Error('user does not exist');
    }
});
exports.existUserId = existUserId;
const existUserEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const existEmail = yield user_1.default.findOne({
        where: {
            email: email
        }
    });
    if (existEmail) {
        throw new Error(`The email ${email} is already registered`);
    }
});
exports.existUserEmail = existUserEmail;
//# sourceMappingURL=db-validators.js.map