const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personModel = new Schema({
    nom : {
        type : String,
        required : true
    },
    age : {
        type : Number
    },
    favoriteFoods : {
        type : [String]
    }
})

module.exports = mongoose.model('Person', personModel)