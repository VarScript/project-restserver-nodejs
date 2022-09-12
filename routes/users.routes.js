// Destructuring something that go in of the package of express
const { Router } = require('express');
const { check } = require('express-validator');

const { validateFields } = require('../middlewares/validate-fields')
const { isRolValidate, ifEmailExist } = require('../helpers/db-validators');

const { userGet,
        userPut,
        userPost,
        userPatch,
        userDelete } = require('../controllers/users.controllers');

const router = Router();


// here it call the reference of the same 
router.get('/', userGet );

router.put('/:id', userPut );

router.post('/', [
    check('name', 'The name is require').not().isEmpty(),
    check('password', 'The password have that be more of six letters').isLength({ min:6 }),
    check('email').custom( ifEmailExist),
    //check('rol', 'Not is validate rol').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('rol').custom( isRolValidate ),
    validateFields  
], userPost );

router.patch('/', userPatch );

router.delete('/', userDelete );


module.exports = router;