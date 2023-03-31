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
}

//Find all cases
exports.getAllCases = (req, res) => {
        Case.find()
        .populate('comments') //include comments in the results
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
    .populate('comments')
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

//Update status on a specific case
exports.updateStatusId = (req, res) => {
    const {statusId} = req.body
    if(!statusId){
        res.status(400).json({message: 'You need to enter a statusId'})
        return
    }
    if(statusId < 1 || statusId > 3){
        res.status(404).json({message: 'This statusId does not exist'})
        return
    }
    Case.findByIdAndUpdate(req.params.id, {status: statusId}, {new: true}) 
    .then((data) => {
        Case.findById(statusId, {$push: {status: data._id}})
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(404).json({message: 'Something went wrong when finding the case!', err: err.message})

    })
}
