const mongoose = require('mongoose')
const stitchingSchema = new mongoose.Schema({
    type : {
        type:String,
    },
    typePrice : {
        type:Number,

    },
    quantity : {
        type:Number,
    },
    additional : {
        type:String,
    },
    additionalPrice : {
        type:Nmuber,
    },
    createdAt:{
        type: Date,
        default:Date.now
    } 
});

const stitching = mongoose.model('stitching',stitchingSchema)


module.exports = {stitching}