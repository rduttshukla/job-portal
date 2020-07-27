var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/job-portal')

var user = mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true}
})

function validateUser(user) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    };
    return Joi.validate(user, schema);
}

module.exports = mongoose.model('User', user)