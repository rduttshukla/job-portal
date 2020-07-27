var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/job-portal')

var job = mongoose.Schema({
    jobTitle: { type: String, required: true},
    company: { type: String, required: true},
    description: { type: String }, 
    location: { type: String },
    personsWhoApplied: { type: Array }
})

module.exports = mongoose.model('Job', job)