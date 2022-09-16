const { response } = require('express');

const { Product, Category } = require('../models');



// GET all products




// GET all products by ID




// Create products - Any person with a token valid
const createProduct = async (req, res = response) => {
    
    const { status, user, ...body } = req.body;
    
    // IF the category is active
    const productDb = await Product.findOne({ body: body.name });

    if ( productDb ) {
        return res.status(401).json({
            msg: `The Product ${ productDb.name }, already exist`
        });
    }

    // Generate the data to save 

    const data = {
        ...body,
        name: body.name.toUpperCase(),
        user: req.user._id,
    }

    const product = new Product( data );

    // Save in Db
    await product.save();

    res.status(201).json( product );
}



// Update - Any person with a token valid




// Delete a category - Only Admin





// - 

module.exports = {
    createProduct,
}