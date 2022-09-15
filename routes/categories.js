const { Router } = require('express');
const { check } = require('express-validator');

const { validateFields } = require('../middlewares/validate-fields');

const router = Router();


// {{url}}/api/cateries


// Get all categories - Public
router.get('/', ( req, res ) => {
    res.json('Get');
});


// Get all categories for id - Public
router.get('/:id', ( req, res ) => {
    res.json('Get - id');
});


// Create category - private - Any person with a token valid
router.post('/', ( req, res ) => {
    res.json('Post');
});


// Update - private - Any with token valid
router.put('/:id', ( req, res ) => {
    res.json('Put - id');
});

// Delete a category - Admin
router.delete('/:id', ( req, res ) => {
    res.json('Delete - Admin');
});



module.exports = router;