const router = require('express').Router()
const caseModel = require('../models/caseModel')



//CREATE
router.post('/', caseModel.createNewCase)
//READ

//UPDATE
router.put('/:id')
//DELETE


module.exports = router