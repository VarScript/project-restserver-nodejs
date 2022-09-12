const Role = require('../models/role');
const User = require('../models/user');

const isRolValidate =  async (rol = '') => {
    const existRole = await Role.findOne({ rol });
    if ( !existRole ) {
        throw new Error(`The Rol ${ rol } is not register in the DataBase`)
    }
}

const ifEmailExist = async (email = '') => {
        const existEmail = await User.findOne({ email });
        if ( existEmail ) {
            throw new Error(`The Email ${ email } it is already register`)
        }
}

module.exports = {
    isRolValidate,
    ifEmailExist
}