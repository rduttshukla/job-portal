var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var Job = require('./models/job')
const uuidv1 = require('uuid/v1');

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

app.get('/jobs', (req, res) => {
    Job.find((err, jobs) => {
        if(err) return res.json(err)
        res.json(jobs)
    })
});

app.get('/jobs/:searchQuery', (req, res) => {
    Job.find({ jobTitle: req.params.searchQuery }, (err, jobs) => {
        if(err) return res.json(err)
        res.json(jobs)
    })
})

app.get('/search/:sq/:location', (req, res) => {
    Job.find({ $or: [ {jobTitle: { $regex: req.params.sq, $options:'i' } }, {description: { $regex: req.params.sq, $options:'i' } }, {company: { $regex: req.params.sq, $options:'i' } }] }, (err, jobs) =>{
        if(err) return res.json(err)
        res.json(jobs)
    })
})

app.post('/jobs', (req, res) => {
    var job = new Job({ jobTitle: req.body.jobTitle, company: req.body.company, description: req.body.description, location: req.body.location })
    job.save((err, job) => {
        if(err) { return res.send(err) }
        res.send(job)
    })
})

app.put('/apply', (req, res) => {
    var arr = []
    var obj = { 
        name: req.body.name,
        applicationMessage: req.body.applicationMessage,
        email: req.body.email,
        applicationId: uuidv1()
    }
    Job.findById(req.body._id, (err, response) => {
        if(err) return res.send(err)
    }).then( (response) => {
        arr = response.personsWhoApplied;
        arr.push(obj);
        Job.findByIdAndUpdate(req.body._id, { personsWhoApplied: arr }, { new: true }, (err, response) => {
            if(err) return res.send(err)
            res.send(response)
        })
    })
})

app.listen(3000, () => {
    console.log('magic happening on ', 3000)
})