const mongoose = require('mongoose')

const userAddSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    phone:{
        type:Number,
        require:true,
        unique:true
    },
    email:{
        type:String,
        unique:true
    },
    address:{
        type:String,
        default:''
    },
    createdAt:{
        type: Date,
        default:Date.now
    }  
});
const addUser = mongoose.model("addUser",userAddSchema)

module.exports = {addUser}