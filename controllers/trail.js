const express = require('express');
const router = express.Router();

const Trail = require('../models/trail')

router.get("/", (req, res, next) => {
    Trail.find({})
      .then((trails) => res.json(trails))
      .catch(next);
  });
// router.get('/', (res,req) =>{
//     res.render("index")
// })



module.exports = router 