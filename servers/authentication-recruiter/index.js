const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)
const config = require('config')
const mongoose = require('mongoose');
const users = require('./routes/users');
const auth = require('./routes/auth');
const session = require('./routes/session');
// const response = require('./routes/response')
const express = require('express')
const app = express()

// if(!config.get('PrivateKey')) {
//     console.error("FATAL ERROR: PrivateKey is not defined")
//     process.exit(1)
// }

mongoose.connect('mongodb://localhost/mongo-games-recruiter').then(() => console.log('now connected to mongoDB!')).catch(err => console.error('something went wrong', err))

app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});
app.use(express.json());
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/session', session);
// app.use('/api/response', response);

const port = process.env.PORT || 4001;
app.listen(port, () => console.log('listening on port', 4001));