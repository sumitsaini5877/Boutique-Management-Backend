const mongoose = require('mongoose')

const userAddSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        default:''
    },
    phone:{
        type:Number,
        require:true,
        unique:true
    },
    
})