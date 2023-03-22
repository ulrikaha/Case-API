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

exports.getAllCases = (req, res) => {

    Case.find()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({
                message: 'Something went wrong when getting the cases'
            })
        })

}

exports.getCase = (req, res) => {
    
    Case.findById(req.params.id)
        .then(data => {
            if(!data) {
                res.status(404).json({
                    message: 'Could not find case'
                })
                return
            }
            res.status(200).json(data)
        })
        .catch(err => {
                res.status(500).json({
                    message: 'Something went wrong when getting this case!',
                    err: err.message
                })
        })
}