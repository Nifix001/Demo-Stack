const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id: {
        type: mongoose.SchemaTypes.Number,
    },
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
    },
})


module.exports = mongoose.model('User', UserSchema);