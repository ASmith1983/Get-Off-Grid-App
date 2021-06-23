const { mongo } = require('../db/connection')
const mongoose = require('../db/connection')
const CommentSchema = new mongoose.Schema({
        name: String,
        review: String,
        owner:{
            type: mongoose.Schema.Types,
            ref: 'Trail', 
        }
})

const Comment = mongoose.model('Comment', CommentSchema)
module.exports = Comment