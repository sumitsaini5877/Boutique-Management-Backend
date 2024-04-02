const mongoose = require('mongoose')
const userSchema =  new mongoose.Schema({
    name : {
        type: String,
        require: true,
        default: ''
    },
    email : {
        type : String,
        require : true,
        unique : true,
    },
    username : {
        type : String,
        require : true,
        unique : true,
    },
    password : {
        type : String,
        require : true,

    },
    confirmPassword : {
        type : String,
        require : true,

    },
    createdAt:{
        type: Date,
        default:Date.now
    }  
});

const user = mongoose.model("user",userSchema)

module.exports = {user}