const { response } = require("express");
const bcryptjs = require('bcryptjs')


const User = require('../models/user');


const { generateJWT } = require("../helpers/generate-jwt");



const login = async (req, res = response) => {
    const { email, password } = req.body;

    try {
        
        // Verify if the Email exist
        const user = await User.findOne({ email })
        if ( !user ) {
            return res.status(400).json({
                msg: 'User / Password are not corrects - Email'
            })
        }

        // If the user is active
        if ( !user.status ) {
            return res.status(400).json({
                msg: 'User / Password are not corrects - status: false'
            })
        }

        // Verify the password
        const validatePassword = bcryptjs  .compareSync( password, user.password) 
        if ( !validatePassword ){
            return res.status(400).json({
                msg: 'User / Password are not corrects - password'
            })
        }

        // Generate the JWT
        const token = await generateJWT( user.id );

        res.json({
            user,
            token
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'something went wrong'
        });
    }
}



const googleSingIn = async (req, res = response ) => {

    const { id_token } = req.body;

    res.json({
        msg: 'All ok',
        id_token
    })
}

module.exports = {
    login,
    googleSingIn
}