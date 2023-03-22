const mongoose = require('mongoose')

const caseSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 1
    }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Case', caseSchema)