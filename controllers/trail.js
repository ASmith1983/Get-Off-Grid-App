const express = require('express');

const router = express.Router();

const Trail = require('../models/trail')


// home route
router.get("/", (req, res, next) => {
    console.log("home page");
    Trail.find({})
      .then((trails) => res.render("index"))
      .catch(next);
  });
// router.get('/', (res,req) =>{
//     res.render("index")
// })

// index route
router.get('/norcal', (req,res) => {
    // console.log(req.body);
  res.render('norCal')
});
router.get('/socal', (req,res) => {
    // console.log(req.body);
  res.render('soCal')
});

// post route
router.post('/norcal', (req, res) => {

});
router.post('/socal', (req, res) => {

});

// show route
router.get('/norcal/:id', (req,res) => {

})
router.get('/socal/:id', (req,res) => {

})

// update route
router.put('/norcal/:id', (req,res) => {

})
router.put('/socal/:id', (req,res) => {

})

// update specific data route
router.patch('/norcal/:id', (req,res) => {

})
router.patch('/socal/:id', (req,res) => {

})


// destroy route
router.delete('/norcal/:id', (req,res) => {

})
router.delete('/socal/:id', (req,res) => {

})





module.exports = router 