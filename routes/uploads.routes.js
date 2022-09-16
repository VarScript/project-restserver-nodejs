const { Router } = require('express');
const { check } = require('express-validator');

const { validateFields } = require('../middlewares');
const { uploadFiles, updateImage } = require('../controllers/uploads.controller');
const { permittedCollection } = require('../helpers');



const router = Router();


router.post('/', uploadFiles);



router.put('/:collection/:id', [
    check('id', 'The Id have that be of Mongo').isMongoId(),
    check('collection').custom( c => permittedCollection( c, ['users', 'products'])),
    validateFields
], updateImage);


module.exports = router;