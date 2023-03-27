const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    caseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Case',
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
  
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Comment', commentSchema)