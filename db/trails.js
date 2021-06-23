const Trail = require('../models/trail')
const User = require('../models/user')
const Comment = require('../models/comment')
const trailData = require('./trails.json')

Trail.deleteMany({})
    .then(() =>{
        return User.create(
            {location:"California", name:"Andrew"}
        )
    })
    .then((user) =>{
        return trailData.map( (trail) => {
            return ({...trail, owner: user._id})
        })
    })
    .then( (trails) => {
        return Trail.insertMany(trails)
    })
    .then((t) =>{
        console.log(t,"inhere");

           return Comment.create({name:"Andrew", review: "hhhhaahaha", owner:t[0]._id })
       
    })
    .catch(console.error)
    .finally(() => {
        process.exit()
    })