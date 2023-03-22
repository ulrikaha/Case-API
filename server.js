const app = require('./app')
const mongoose = require('mongoose')
const cors = require('cors')
cors()
const { config } = require('dotenv')
config()

const PORT = process.env.PORT || 9999
const serverURI = `http://localhost:${PORT}`
const mongoURI = process.env.MONGO_URI

app.listen(PORT, () => console.log('server running on: ' + serverURI))

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to DB!'))