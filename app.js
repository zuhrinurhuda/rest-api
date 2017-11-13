// require libraries
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

// invoke express
const app = express()

// require routers
const index = require('./routers/index')
const users = require('./routers/users')

// use middleware
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// website routes
app.use('/api', index)
app.use('/api/users', users)

// app.listen(3000, () => console.log('Example app listening on port 3000!'))
app.listen(process.env.PORT || '3000')
