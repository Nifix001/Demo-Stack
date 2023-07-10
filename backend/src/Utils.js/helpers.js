const bcrypt = require('bcryptjs');

function hashPasword(password){
    const salt = bcrypt.genSaltSync();
    return bcrypt.hashSync(password, salt)
}

function comparePassword(raw, hash){
    return bcrypt.compareSync(raw, hash)
}
module.exports ={
    hashPasword,
    comparePassword,
}