const Joi = require('joi')
const bcrypt = require('bcrypt')
const _ = require('lodash')
const { User } = require('../models/user')
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if(error) { 
        return res.status(400).send(error.detials[0].message);
    }

    let user = await User.findOne({ email: req.body.email });
    if(!user) {
        return res.status(400).send('incorrect email or password.');
    }

    const validPassword =  await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) {
        return res.send(400).send('incorrect email or password');
    }

    const token = jwt.sign({ _id: user._id }, 'PrivateKey');
    //x-auth token is sent to header, but I don't know how to access it inside or outside Angular
    res.header('x-auth-token', token).send(_.pick(user,['_id', 'firstName', 'lastName', 'userId', 'email', 'company']));
});

function validate(req) {
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    }
    return Joi.validate(req, schema);
}

module.exports = router;