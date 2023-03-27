const Case = require('../schemas/caseSchema')
const Comment = require('../schemas/commentSchema')
const Status = require('../schemas/statusSchema')


//Create a new case
exports.createNewCase = (req, res) => {
const{ email, subject, message } = req.body

    if(!email || !subject || !message){
        res.status(400).json({
            message: 'A case must contain an email, a subject and a message!'
        })
        return
    }

//ADDED
Status.findOne({_id: 1 })
.then(defaultStatus => {
    Case.create({ email, subject, message, status: defaultStatus})
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(500).json({
                message: 'Something went wrong creating the case',
                err: err.message

            })
        })
          
})

}

//Find all cases
exports.getAllCases = (req, res) => {
        Case.find()
        .populate('comment') //include comments in the results
        .populate('status')   //include status in the results     
        .exec()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({
                message: 'Something went wrong when getting the cases'
            })
        })

}

//Find a case by id
exports.getCase = (req, res) => {
    Case.findById(req.params.id)
    .populate('comment')
    .populate('status')
       .exec()
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


//Update a case status
exports.updateCaseStatus = (req, res) => {
    Case.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .populate('comment')
    .populate ('status')
    .exec()
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
            message: 'Something went wrong when updating this case!',
            err: err.message
        })
    })
}


