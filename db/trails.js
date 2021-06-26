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
            return Comment.deleteMany({})
            .then(() =>{
                return trailData.map((_t) =>{
                    console.log(_t.name)
                    return ({name: _t.comment.name, review: _t.comment.review, owner: t.filter(_ => _.name == _t.name )[0]._id })
                })
            })
            .then((comments) =>{
                console.log(comments)
                return Comment.insertMany(comments)
            })
       
    })
   
    .catch(console.error)
    .finally(() => {
        process.exit()
    })