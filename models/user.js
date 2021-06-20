const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    location: String,
    name: String
    },
    {timestamps: true}
)

const User = mongoose.model("User", UserSchema)

module.exports = User