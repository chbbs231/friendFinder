const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'app', 'public')))
app.use(express.json())
app.use(express.urlencoded({  extended: true }))

require('./routes/apiRoutes')(app)
require('./routes/htmlRoutes')(app)

app.listen(3002)