
const Comment = require('../schemas/commentSchema')
const Case = require('../schemas/caseSchema')

exports.addCommentToCase = (req, res) => {
  const { caseId, email, message } = req.body;

  if (!caseId || !email || !message) {
    res.status(400).json({
      message: "CaseId, email and message cant be empty",
    });
    return;
  }

  Comment.create({ caseId, email, message })
    .then((data) => {
      Case.findByIdAndUpdate(caseId, { $push: { comments: data._id } })
        .then(() => {
          res.status(201).json(data);
        })
        .catch((err) => {
          res.status(500).json({
            message: "Something went wrong",
            err: err.message,
          });
        });
    })
 
};
