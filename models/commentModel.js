const Comment = require ('../schemas/commentSchema')


exports.addCommentToCase = (req, res) =>{

    const { caseId, email, message } = req.body

    if(!caseId || !email || !message){
      res.status(400).json({
          message: 'CaseId, email and message cant be empty'
      })
      return
  }

    Comment.create({caseId,email,message})
    .then(data =>{
      res.status(201).json(data)
    })
    .catch(err =>{
      res.status(500).json({
        message: 'Something went wrong',
        err: err.message
      })
    })
  
  }