// For record my user in database

const { Schema, model } = require('mongoose');


const UserSchema = Schema({
    name: {
        type: String,
        require: [true, 'The name is required']
    },
    email: {
        type: String,
        require: [true, 'The email is required'],
        unique: true // for dot'n repeat emails
    },
    password: {
        type: String,
        require: [true, 'The password is required']
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
