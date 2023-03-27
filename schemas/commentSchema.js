const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    caseId:     {type: String, required: true},
    email:      {type: String, required: true},
    message:    {type: String, required: true},
    },
    {timestamps: true}
)

module.exports = mongoose.model('Comment', commentSchema)