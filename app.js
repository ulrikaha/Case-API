const express = require('express')
const app = express()


//MIDDLEWARÈ
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//CONTROLLERS
app.use('/api/cases', require('./controllers/caseController'))
app.use('/api/comments', require('./controllers/commentController'))

module.exports = app