const { response } = require('express');

const { Product } = require('../models');



// GET all products
const productsGet = async (req, res = response) => {

    const { limit = 5, since = 0 } = req.query;
    const query = { status: true };

    const [ total, products ] = await Promise.all([
        Product.countDocuments(query),
        Product.find(query)
            .populate('user', 'name')
            .skip(Number( since ))
            .limit(Number( limit ))
    ]);

    res.json({
        total,
        products
    });
} 



// GET all products by ID
const productsGetId = async(req, res = response) => {
    const { id }= req.params;

    const product = await Product.findById(id).populate('user', 'name');

    res.json(product)
}



// Create products - Any person with a token valid
const createProduct = async (req, res = response) => {
    
    const { status, user, ...body } = req.body;
    const name = body.name ;

    // IF the category is active
    const productDb = await Product.findOne({ name });

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




// Delete a product - Only Admin





// - 

module.exports = {
    productsGet,
    productsGetId,
    createProduct,
}