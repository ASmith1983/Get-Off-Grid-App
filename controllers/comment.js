const express = require('express');

const router = express.Router();
const Trail = require('../models/trail')
const Comment = require('../models/comment')


router.get("/trail/:id", (req, res) => {
    let routeId = req.params.id;
    Comment.find({})
      .then((comments) => res.render('trail'))
      .catch(err => {
        console.log(err);
        res.send("no luck on comment route")
    })
});
  
    


// post route----- create	add data
router.get('/newComment', (req,res) =>{
    console.log("test create route");
    let routeId = req.params.id;

    res.render('newComment', {id: routeId});
})


router.post('/newComment', (req, res) => {
    console.log("test create route");
    let routeId = req.params.id;
   Comment.create(req.body)
    .then(comment =>{
        res.render('newComment', {comment})
    })
    .catch(err => {
        console.log(err);
        res.send("no luck on new")
    })
})

router.get('/commentEdit/:id', (req,res) =>{
    let routeId = req.params.id
    Trail.findById(routeId)
        .then(trail => 
            Comment.find({owner: trail._id })
            .then(comments =>{
                res.render('commentEdit', {comments})

            })
        )
})


// // update route----	update	modify existing data
router.put('/update/:id', (req,res) => {
    let routeId = req.params.id
    Comment.findByIdAndUpdate(
        {_id : routeId},
        {
            name: req.body.name, 
            review: req.body.review
        },
        { new: true}
    )
    .then( 
        res.redirect('../')
    )
    .catch(err => {
        console.log(err);
        res.send("no luck on update")
    })
})

// destroy route-------delete	delete existing data
router.delete('/delete/:id', (req,res) => {
    let routeId = req.params.id
    Comment.findOneAndDelete(
        {_id : routeId},
    )
    .then(comment => {
        res.json({msg: `Id ${routeId} deleted`, comment})
        
    })
    .then(res.redirect('../'))
    .catch(err => {
        console.log(err);
        res.send("no luck on delete route")
    })   
})











module.exports = router 