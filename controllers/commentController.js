const router = require('express').Router()
const commentModel = require('../models/commentModel')

router.post('/', commentModel.addCommentToCase) 

module.exports= router