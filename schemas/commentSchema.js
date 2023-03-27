const mongoose = require ('mongoose')

const commentSchema = mongoose.Schema({
    caseId: {
        type: String,
        require:true// kommer vara id på det här caset (ref:"case = refererar till Case Schemat")
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },

})

module.exports = mongoose.model('Comment', commentSchema)