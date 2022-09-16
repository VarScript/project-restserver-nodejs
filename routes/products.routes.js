const { Router } = require('express');
const { check } = require('express-validator');

const { 
    validateFields,
    validateJWT,
    isAdminRole
} = require('../middlewares');

const{

} = require('../controllers/products.controller');




const router = Router();



// GET all products
router.get('/', (req,res) => {
    res.json('GET products')
});


// GET all products by ID
router.get('/:id', (req,res) => {
    res.json('GET products - ID')
});


// Create products - Any person with a token valid
router.post('/', (req,res) => {
    res.json('CERATE products - ID - TOKEN')
});


// Update - Any person with a token valid
router.put('/:id', (req,res) => {
    res.json('UPDATE products - ID - TOKEN')
});


// Delete a category - Only Admin
router.delete('/:id', (req,res) => {
    res.json('DELETE product - ADMIN')
});


module.exports = router;








