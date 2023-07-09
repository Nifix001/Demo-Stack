const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    first_name: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    last_name: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    email: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    gender: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    ip_address: {
        type: mongoose.SchemaTypes.Number,
        required: true
    },
})


module.exports = mongoose.model('User', UserSchema);