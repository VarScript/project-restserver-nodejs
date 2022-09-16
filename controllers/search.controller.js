const { response } = require("express");

const { ObjectId } = require('mongoose').Types;

const { User, Category, Product } = require('../models')

const permittedCollection = [
    'users',
    'category',
    'product',
    'role'
];

const searchUsers = async ( term = '', res = response) => {

    const isMongoId = ObjectId.isValid( term ); 

    if ( isMongoId ){
        const user = await User.findById( term );
        if (user.status === false) {
            return res.json({
                msg: 'Ther user not exist'
            });
        } else {
            return res.json({
                result: ( user ) ? [ user ] : []
            });
        }
        
    }   
    
    // RegExp is a regular expression that serve for that be an insensitive to the capital latter and lower case
    const regex = new RegExp(term, 'i')
    const usersC = await User.count({ 
        $or: [{ name: regex  }, { email: regex }],
        $and: [{ status: true }]
    });
    const users = await User.find({ 
        $or: [{ name: regex  }, { email: regex }],
        $and: [{ status: true }]
    });
    res.json({result: usersC, users});


}


const search = (req, res= response) => {

    const { collection, term } = req.params;

    if ( !permittedCollection.includes( collection ) ) {
        return res.status(400).json({
            msg: `The permitted collection are: ${ permittedCollection }`
        });
    }
    
    switch ( collection ) {
        case 'users':
            searchUsers(term, res)
        break;
        case 'category':
        
        break;
        case 'product':
        
        break;

        default:
            res.status(500).json({
                msg: 'I forget implement this search'
            });
    }
}

module.exports = {
    search
}