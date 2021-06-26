const express = require('express')
const app = express()
const cors = require('cors')
const ejsLayouts = require ('express-ejs-layouts')
const methodOverrride = require('method-override');

const trailController = require('./controllers/trail.js')
const commentController = require('./controllers/comment')

app.set('view engine', 'ejs')
app.use(ejsLayouts)

// set up static files ie, images, css, etc
app.use(express.static(__dirname + '/public'))

// Use middleware to parse the data in the HTTP request body and add
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(cors())

app.use(methodOverrride('_method'))

app.use('/', trailController)
app.use('/', commentController)

// port set up..
app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), ()=> {
    console.log(`Port running on ${app.get('port')}`);
})