const path = require('path');
const fs   = require('fs')

const { response } = require("express");
const { uploadFile } = require("../helpers");

const { User, Product } = require('../models')



const uploadFiles = async (req, res =  response) => {

    try {
        
        const name = await uploadFile( req.files, undefined, 'imgs');
        res.json({ name });

    } catch (msg) {
        res.status(400).json({ msg })
    }
    
}



const updateImage = async (req, res = response ) => {
        
    const { id, collection } = req.params;
    
    let model;

    switch (collection) {
        case 'users':
            model = await User.findById(id)
            if ( !model ) {
                return res.status(400).json({
                    msg: `Not exist an user with id ${ id }`
                }); 
            }
        break;

        case 'products':
            model = await Product.findById(id)
            if ( !model ) {
                return res.status(400).json({
                    msg: `Not exist a product with id ${ id }`
                }); 
            }
        break;
    
        default:
            return res.status(500).json({msg: 'I forget valiated this'});
    }

    // Clean previous images
    if ( model.img ) {
        // Delete the image of the server
        const pathImg = path.join( __dirname, '../uploads', collection, model.img );
        if ( fs.existsSync( pathImg ) ) {
            fs.unlinkSync( pathImg );
        }
    }

    
    const name = await uploadFile( req.files, undefined, collection );
    
    model.img = name;

    await model.save();



    res.json( model )
}


module.exports = {
    uploadFiles,
    updateImage
}