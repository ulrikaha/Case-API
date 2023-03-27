const router = require('express').Router()
const commentModel = require('../models/commentModel')



//CREATE
router.post('/', commentModel.addCommentToCase)
// GET
router.get('/', commentModel.getAllComments)

module.exports = router