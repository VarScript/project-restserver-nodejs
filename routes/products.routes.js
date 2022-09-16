const { Router } = require('express');
const { check } = require('express-validator');

const { 
    validateFields,
    validateJWT,
    isAdminRole
} = require('../middlewares');

const{
    productsGet,
    createProduct,

} = require('../controllers/products.controller');

const { existCategoryById } = require('../helpers/db-validators');




const router = Router();



// GET all products
router.get('/', productsGet);



// GET all products by ID
router.get('/:id', (req,res) => {
    res.json('UPDATE products - ID - TOKEN')
});



// Create products - Any person with a token valid
router.post('/', [
    validateJWT,
    check('name', 'The name is require').not().isEmpty(),
    check('category', 'The id category is necessary').isMongoId(),
    check('category').custom( existCategoryById ),
    validateFields
], createProduct);



// Update - Any person with a token valid
router.put('/:id', (req,res) => {
    res.json('UPDATE products - ID - TOKEN')
});



// Delete a category - Only Admin
router.delete('/:id', (req,res) => {
    res.json('DELETE product - ADMIN')
});


module.exports = router;








