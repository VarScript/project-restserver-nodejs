const { response, request } = require('express')
const jwt = require('jsonwebtoken')

const validateJWT = ( req = request, res = response, next ) => {

    const token = req.header('x-token');
    
    if ( !token ) {
        return res.status(401).json({
            msg: 'There is not token in the petition'
        });
    }

    try {
        const { uid } = jwt.verify( token, process.env.SECRETORPRIVATEKEY );
        
        req.uid = uid;


        next();

    } catch (error) {

        res.status(401).json({
            msg: 'Invalid token'
        })
    }

}

module.exports = {
    validateJWT
}