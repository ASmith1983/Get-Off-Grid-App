const Trail = require('../models/trail')
const User = require('../models/user')
const trailData = require('./trails.json')

Trail.deleteMany({})
    .then(()=> {
        return Trail.insertMany(trailData)
    })
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
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit()
    })