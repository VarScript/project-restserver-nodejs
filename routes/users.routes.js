// Destructuring something that go in of the package of express
const { Router } = require('express');
const { check } = require('express-validator');
const Role = require('../models/role');

const { validateFields } = require('../middlewares/validate-fields')

const { userGet,
        userPut,
        userPost,
        userPatch,
        userDelete } = require('../controllers/users.controllers')

const router = Router();


// here it call the reference of the same 
router.get('/', userGet );

router.put('/:id', userPut );

router.post('/', [
    check('name', 'The name is require').not().isEmpty(),
    check('password', 'The password have that be more of six letters').isLength({ min:6 }),
    check('email', 'The email is not validate').isEmail(),
    //check('rol', 'Not is validate rol').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('rol').custom( async (rol = '') => {
        const existRole = await Role.findOne({ rol });
        if ( !existRole ) {
            throw new Error(`The Rol ${ rol } is not register in the DataBase`)
        }
    }),
    validateFields  
], userPost );

router.patch('/', userPatch );

router.delete('/', userDelete );


module.exports = router;