const jwt = require('jsonwebtoken')
const express = require('express')
const router = express .Router();
 
router.post('/', async (req, res) => {
    var token = req.body.token
    let user = await jwt.decode(token, 'PrivateKey')
    console.log(user)
    res.json(user)
})

module.exports = router

