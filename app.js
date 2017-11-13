const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')

const users = require('./routers/users')

app.use(morgan('combined'))


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', users)

app.listen(3000, () => console.log('Example app listening on port 3000!'))
