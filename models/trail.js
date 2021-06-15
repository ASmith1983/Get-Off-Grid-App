const { mongo } = require('../db/connection')
const mongoose = require('../db/connection')
const TrailSchema = new mongoose.Schema({
    
        name: String,
        parkId: Number,
        location: String,
        difficulty: Number,
        length: Number,
        elevationChange: Number,
        routeType: String
})

const Trail = mongoose.model('Trail', TrailSchema)
module.exports = Trail