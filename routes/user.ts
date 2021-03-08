import { Router } from 'express';
import { check } from 'express-validator';
import userController  from '../controllers/user';

// Middlewares
import validateFields  from '../middlewares/validate-fields';

// Helpers
import { existUserId, existUserEmail } from '../helpers/db-validators';


const router = Router();

router.get('/', userController.getUsers);

router.get('/:id', [
    check('id').custom(id => existUserId(id)),
    validateFields
], userController.getUser);

router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('lastname', 'Lastname is required').not().isEmpty(),
    check('email', 'Email is required').not().isEmpty(),
    check('email').custom(email => existUserEmail(email)),
    check('age', 'Age is required').not().isEmpty(),
    validateFields
], userController.createUser);

router.put('/:id', [
    check('id').custom(id => existUserId(id)),
    check('name', 'Name is required').not().isEmpty(),
    check('lastname', 'Lastname is required').not().isEmpty(),
    check('email', 'Email is required').not().isEmpty(),
    check('age', 'Age is required').not().isEmpty(),
    validateFields
], userController.updateUser);

router.delete('/:id', [
    check('id').custom(id => existUserId(id)),
    validateFields
], userController.deleteUser);

export default router;
 


