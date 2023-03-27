const Comment = require('../schemas/commentSchema')



exports.addCommentToCase = (req, res) => {

    const{ caseId, email, message } = req.body
    if(!caseId || !email || !message){
        res.status(400).json({
            message: 'A comment must contain an email, a case Id and a message!'
        })
        return
    }

    Comment.create({ caseId, email, message})
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(500).json({
                message: 'Something went wrong creating the comment',
                err: err.message

            })
        })
        return    
}