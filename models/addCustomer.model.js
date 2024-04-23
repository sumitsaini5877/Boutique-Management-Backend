const mongoose = require('mongoose')

const customerAddSchema = new mongoose.Schema({
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
    
    size : {
        type : mongoose.Schema.Types.ObjectId,
        ref :'size'
    },
    stitchingCategory : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'stitchingDetails'
    }],
    createdAt:{
        type: Date,
        default:Date.now
    }  
});
const addUser = mongoose.model("addUser",customerAddSchema)

module.exports = {addUser}