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
    _id: {
        type: String,
        default: true
    },
    createdAt: {
        type: String,
        default: true
    },
    updatedAt: {
        type: String,
        default: true
    },
    status: {
        type: String,
        default: true
    }
})

module.exports = mongoose.model('Case', caseSchema)