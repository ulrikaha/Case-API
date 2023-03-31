const mongoose = require('mongoose')
const { Schema } = mongoose;

const statusSchema = new Schema({
    _id: {
        type: Number
    },
    status: {
        type: String
    }
})


module.exports = mongoose.model('Status', statusSchema)