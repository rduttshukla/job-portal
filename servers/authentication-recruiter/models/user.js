const Joi = require('joi');
const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 5, 
        maxlength: 50
    },
    lastName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5, 
        maxlength: 255,
        unique: true
    }, 
    userId: {
        type: String,
        required: true,
        minlength: 5, 
        maxlength: 50
    },
    company: {
        type: String,
    },
    password: {
        type: String, 
        required: true,
        minlength: 5, 
        maxlength: 1024
    },
}));

function validateUser(user) {
    const schema = {
        firstName: Joi.string().min(5).max(50).required(),
        lastName: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        company: Joi.string().min(5).max(255).required(),
        password: Joi.string().min(5).max(255).required(),
        userId: Joi.string().min(5).max(255).required()
    };
    return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;