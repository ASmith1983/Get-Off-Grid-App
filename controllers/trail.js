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
      Trail.find({})
      .then((trails) => res.render('norcal',{trails:trails}))
      .catch(err => {
          console.log(err);
          res.send("no luck on norcal")
      })
        
});

router.get('/socal', (req,res) => {
        Trail.find({})
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




// // update route----	update	modify existing data
// router.put('/update/:id', (req,res) => {

// })


// update specific data route--------	update	modify existing data
router.patch('update/:id', (req,res) => {
    res.render('update')

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
    // .then(res.redirect('/'))
    .catch(err => {
        console.log(err);
        res.send("no luck on delete route")
    })   
})






module.exports = router 