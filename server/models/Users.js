const mongoose = require("mongoose")

const cardSchema = mongoose.Schema({
    Username: String,
    FullName: String,
    Email: String,
    Password: String,
})

module.exports  = mongoose.model('Users',cardSchema);