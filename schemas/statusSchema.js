const mongoose = require('mongoose')
const { Schema } = mongoose;

const statusSchema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
  
}, {
    timestamps: true
})


module.exports = mongoose.model('Status', statusSchema)