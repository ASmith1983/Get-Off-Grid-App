const express = require('express')
const app = express()
const ejsLayouts = require ('express-ejs-layouts')

const trailController = require('./controllers/trail.js')

app.set('view engine', 'ejs')
app.use(ejsLayouts)

// set up static files ie, images, css, etc
app.use(express.static(__dirname + '/public'))

// set up import control
// const trailController = require('./controllers/trail.js')

// Use middleware to parse the data in the HTTP request body and add
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/', trailController)

// port set up..
app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), ()=> {
    console.log(`Port running on ${app.get('port')}`);
})