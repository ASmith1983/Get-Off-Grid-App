const express = require('express');

const router = express.Router();

const Trail = require('../models/trail')

const Comment = require('../models/comment')


// home route
router.get("/", (req, res) => {
    console.log("home page");
    Trail.find({})
      .then((trails) => res.render('index'))
      .catch(err => {
        console.log(err);
        res.send("no luck on home route")
    })
});
  
// index route----GET	read	retrieve data
router.get('/calTrails', (req, res) => {
      // console.log(req.body);
      Trail.find({state: "CA"})
      .then((trails) => res.render('calTrails',{trails:trails}))
      .catch(err => {
          console.log(err);
          res.send("no luck")
      })
        
});

router.get('/outOfStateTrails', (req,res) => {
        Trail.find({state: "NV"})
        .then((trails) => res.render('outOfStateTrails',{trails:trails}))
        .catch(err => {
            console.log(err);
            res.send("no luck")
        })
});
    
// show route--------for specific id
router.get("/trail/:id", (req, res) => {
        // res.send(req.params.id);
        let routeId = req.params.id;
        console.log(routeId);
        Trail.findById({_id: routeId})
          .then((trail) => {
              console.log(trail)
              Comment.find({owner: trail._id })
                    .then(comments =>{
                        console.log(comments,"needs more something");
                        res.render('trail', {trail, comments})

                    })
          })
          .catch(err => {
            console.log(err);
            res.send("no luck on trail page")
        })
});


// post route----- create	add data
router.get('/new', (req,res) =>{
    res.render('new');
})

router.get('/newComment', (req,res) =>{
    Comment.find({})
      .then((comments) => res.render('newComment', {comments:comments}))
      .catch(err => {
        console.log(err);
        res.send("no luck on home route")
    })
})


router.post('/new', (req, res) => {
    console.log("test create route");
   Trail.create(req.body)
    .then(results =>{
        res.redirect('calTrails')
    })
    .catch(err => {
        console.log(err);
        res.send("no luck on new")
    })
})

router.post('/newComment', (req, res) => {
    console.log(req.body);
   Trail.find({name: req.body.owner})
   .then(trail =>{
       console.log(trail);
    Comment.create( {name: req.body.name, review: req.body.review, owner: trail[0]._id } )
    .then(comment =>{
        Comment.find({})
        .then(comments =>{
            res.render('newComment', {comments: comments})
        })
      
    })
    .catch(err => {
        console.log(err);
        res.send("no luck on newComment")
    })
   })
  

})

router.get('/edit/:id', (req,res) =>{
    let routeId = req.params.id
    Trail.findById(routeId)
        .then(trail => 
            Comment.find({owner: trail._id })
            .then(comments =>{
                res.render('edit', {trail, comments}) 

            })
        )
})

// router.get('/commentEdit/:id', (req,res) =>{
//     let routeId = req.params.id
//     Trail.findById(routeId)
//     .then (trail=> 
        
//     Comment.findById(trail)
//         .then(comment => {
//                 res.render('commentEdit', {comment: comment})

//         })
//     )
// })


router.get('/commentEdit/:id', (req,res) =>{
    let routeId = req.params.id
    Comment.findById(routeId)
        .then(comment => {
                res.render('commentEdit', {comment: comment})
        })
})




// // update route----	update	modify existing data


router.put('/commentEdit/:id', (req,res) => {
    console.log("SOmethign wnet wrong here Brosive!");
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
        res.render('index')
    )
    .catch(err => {
        console.log(err);
        res.send("no luck on update")
    })
})



router.put('/update/:id', (req,res) => {
    let routeId = req.params.id
    Trail.findByIdAndUpdate(
        {_id : routeId},
        {
            name: req.body.name, 
            location : req.body.location,
            state: req.body.state,
            difficulty : req.body.difficulty,
            length : req.body.length,
            elevationChange : req.body.elevationChange,
            routeType : req.body.routeType
        },
        { new: true}
        
    )
    .then( trail =>{
        console.log(trail);
        res.render('edit', {trail:trail})
    })
    .catch(err => {
        console.log(err);
        res.send("no luck on update for trail update")
    })
    

})


// destroy route-------delete	delete existing data
router.delete('/delete/:id', (req,res) => {
    let routeId = req.params.id
    Comment.findOneAndDelete(
        {_id : routeId},
    )
    .then(comments => {
        res.json({msg: `Id ${routeId} deleted`, comments})
        
    })
    .then(res.redirect('/newComment'))
    .catch(err => {
        console.log(err);
        res.send("no luck on delete for comment route")
    })   
})






router.delete('/delete/:id', (req,res) => {
    let routeId = req.params.id
    Trail.findOneAndDelete(
        {_id : routeId},
    )
    .then(trail => {
        res.json({msg: `Id ${routeId} deleted`, trail})
        
    })
    .then(res.redirect('/calTrails'))
    .catch(err => {
        console.log(err);
        res.send("no luck on delete route")
    })   
})






module.exports = router 