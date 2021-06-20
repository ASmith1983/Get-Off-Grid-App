const { mongo } = require('../db/connection')
const mongoose = require('../db/connection')
const TrailSchema = new mongoose.Schema({
    
        name: String,
        location: String,
        difficulty: Number,
        length: Number,
        elevationChange: Number,
        routeType: String,
        owner:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', 
        }
})

const Trail = mongoose.model('Trail', TrailSchema)
module.exports = Trail