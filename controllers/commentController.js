const router = require('express').Router()
const commentModel = require('../models/commentModel')



//CREATE
router.post('/', commentModel.addCommentToCase)

module.exports = router