"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const user_1 = __importDefault(require("../controllers/user"));
// Middlewares
const validate_fields_1 = __importDefault(require("../middlewares/validate-fields"));
// Helpers
const db_validators_1 = require("../helpers/db-validators");
const router = express_1.Router();
router.get('/', user_1.default.getUsers);
router.get('/:id', [
    express_validator_1.check('id').custom(id => db_validators_1.existUserId(id)),
    validate_fields_1.default
], user_1.default.getUser);
router.post('/', [
    express_validator_1.check('name', 'Name is required').not().isEmpty(),
    express_validator_1.check('lastname', 'Lastname is required').not().isEmpty(),
    express_validator_1.check('email', 'Email is required').not().isEmpty(),
    express_validator_1.check('email').custom(email => db_validators_1.existUserEmail(email)),
    express_validator_1.check('age', 'Age is required').not().isEmpty(),
    validate_fields_1.default
], user_1.default.createUser);
router.put('/:id', [
    express_validator_1.check('id').custom(id => db_validators_1.existUserId(id)),
    express_validator_1.check('name', 'Name is required').not().isEmpty(),
    express_validator_1.check('lastname', 'Lastname is required').not().isEmpty(),
    express_validator_1.check('email', 'Email is required').not().isEmpty(),
    express_validator_1.check('age', 'Age is required').not().isEmpty(),
    validate_fields_1.default
], user_1.default.updateUser);
router.delete('/:id', [
    express_validator_1.check('id').custom(id => db_validators_1.existUserId(id)),
    validate_fields_1.default
], user_1.default.deleteUser);
exports.default = router;
//# sourceMappingURL=user.js.map