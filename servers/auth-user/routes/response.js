const _ = require('lodash')
const { User } = require('../models/user')
const express = require('express');
const router = express.Router();

router.put('/', (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if(err) return res.send(err)
        var arr = user.response;
        arr.push(req.body.response)
        User.findOneAndUpdate({ email: req.body.email }, { response: arr }, (err, user) => {
            if(err) return res.send(err)
            res.send(user.response)
        })
    })
})

router.post('/', (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if(err) return res.send(err);
        res.send(user.response)
    })
})

module.exports = router