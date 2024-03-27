const mongoose = require('mongoose')

const url = 'mongodb://127.0.0.1:27017/Boutique'

async function connectDB(){
    try{
        await mongoose.connect(url)
        console.log('>>>>>Database is connnected');
    } catch(err){
        console.error('Error  connecting  to the database:',err.message);
    }
}

module.exports = { connectDB };
