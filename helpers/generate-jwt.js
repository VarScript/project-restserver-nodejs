const jwt = require('jsonwebtoken')



const generateJWT = ( uid = '' ) => {
    return  new Promise((resolve, reject)=> {

        const payload= { uid };

        jwt.sign( payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '20d'
        }, ( err, token ) => {

            if ( err ) {
                console.log( err );
                reject( 'Cannot generate the token' )
            } else {
                resolve( token );
            }
        })
    });
}



module.exports = {
    generateJWT
}