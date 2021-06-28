const { mongo } = require('../db/connection')
const mongoose = require('../db/connection')
const TrailSchema = new mongoose.Schema({
    
        name: String,
        trailhead: String,
        url: String,
        state: String,
        difficulty: Number,
        length: Number,
        elevationChange: Number,
        routeType: String,
        img:String,

        owner:{
            type: mongoose.Schema.Types,
            ref: 'User', 
        }
})

const Trail = mongoose.model('Trail', TrailSchema)
module.exports = Trail