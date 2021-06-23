const express = require('express');

const router = express.Router();

const Trail = require('../models/trail')


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
router.get('/norcal', (req, res) => {
      // console.log(req.body);
      Trail.find({state: "CA"})
      .then((trails) => res.render('socal',{trails:trails}))
      .catch(err => {
          console.log(err);
          res.send("no luck on norcal")
      })
        
});

router.get('/nv', (req,res) => {
        Trail.find({state: "NV"})
        .then((trails) => res.render('socal',{trails:trails}))
        .catch(err => {
            console.log(err);
            res.send("no luck on socal")
        })
});
    
// show route--------for specific id
router.get("/trail/:id", (req, res) => {
        // res.send(req.params.id);
        let routeId = req.params.id;
        Trail.findById(routeId)
          .then((trail) => res.render('trail', {trail: trail}))
          .catch(err => {
            console.log(err);
            res.send("no luck on trail page")
        })
});


// post route----- create	add data
router.get('/new', (req,res) =>{
    res.render('new');
})


router.post('/new', (req, res) => {
    console.log("test create route");
   Trail.create(req.body)
    .then(results =>{
        res.redirect('norcal')
    })
    .catch(err => {
        console.log(err);
        res.send("no luck on new")
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


// // update route----	update	modify existing data
router.put('/update/:id', (req,res) => {
    let routeId = req.params.id
    Trail.findByIdAndUpdate(
        {_id : routeId},
        {
            name: req.body.name, 
            location : req.body.location,
            difficulty : req.body.difficulty,
            length : req.body.length,
            elevationChange : req.body.elevationChange,
            routeType : req.body.routeType
        },
        { new: true}
        
    )
    .then( 
        // res.render('update', {trail:trail})
        res.redirect('/socal')
    )
    .catch(err => {
        console.log(err);
        res.send("no luck on update")
    })
    

})


// update specific data route--------	update	modify existing data
router.patch('update/:id', (req,res) => {
    // let routeId = req.params.id
    // Trail.findByIdAndUpdate(
    //     {_id : routeId},

    // )
    // res.render('update')

})


// destroy route-------delete	delete existing data
router.delete('/delete/:id', (req,res) => {
    let routeId = req.params.id
    Trail.findOneAndDelete(
        {_id : routeId},
    )
    .then(trail => {
        res.json({msg: `Id ${routeId} deleted`, trail})
        
    })
    .then(res.redirect('/socal'))
    .catch(err => {
        console.log(err);
        res.send("no luck on delete route")
    })   
})






module.exports = router 