// Destructuring something that go in of the package of express
const { Router } = require('express');
const { userGet,
        userPut,
        userPost,
        userPatch,
        userDelete } = require('../controllers/users.controllers')

const router = Router();


// here it call the reference of the same 
router.get('/', userGet );

router.put('/:id', userPut );

router.post('/', userPost );

router.patch('/', userPatch );

router.delete('/', userDelete );


module.exports = router;