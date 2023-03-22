const Case = require('../schemas/caseSchema')



exports.createNewCase = (req, res) => {

    const{ email, subject, message } = req.body
    if(!email || !subject || !message){
        res.status(400).json({
            message: 'A case must contain an email, a subject and a message!'
        })
        return
    }

    Case.create({ email, subject, message})
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(500).json({
                message: 'Something went wrong creating the case',
                err: err.message

            })
        })
        return
}