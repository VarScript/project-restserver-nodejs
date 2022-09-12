// For record my user in database

const { Schema, model } = require('mogoose');


const UserSchema = Schema({
    name: {
        type: String,
        require: [treu, 'The name is required']
    },
    email: {
        type: String,
        require: [treu, 'The email is required'],
        unique: true // for dot'n repeat emails
    },
    password: {
        type: String,
        require: [treu, 'The password is required']
    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        require: true,
        emun: ['ADMIN_ROL', 'USER_ROL'] // VALIDATE any of the two roles
    },
    status: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    },
});




module.exports =  model( 'User', UserSchema )
