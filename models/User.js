const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    pledgeclass: {
        type: String
    },
    password: {
        type: String
    }, 
    major: {
        type: String
    }
}, {timestamps: true});

const User = mongoose.model('User', userSchema);
module.exports = User;