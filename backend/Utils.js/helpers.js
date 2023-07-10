const bcrypt = require('bcryptjs');

function hashPasword(password){
    const salt = bcrypt.genSaltSync();
    return bcrypt.hashSync(password, salt)
}

module.exports ={
    hashPasword
}