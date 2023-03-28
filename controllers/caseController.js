const router = require('express').Router()
const caseModel = require('../models/caseModel')



//CREATE
router.post('/', caseModel.createNewCase)
//READ
router.get('/', caseModel.getAllCases)
router.get('/:id', caseModel.getCase)
//UPDATE
router.put('/:id', caseModel.updateCaseStatus)
//DELETE


module.exports = router