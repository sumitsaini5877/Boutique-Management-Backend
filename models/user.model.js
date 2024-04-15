const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
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
userSchema.pre('save',async function(next){
    const user = this;// this represent the all user data and schema model

    // hash the password  only if it has benn modified (or is new )
    if(!user.isModified('password')) return next();

    try{
        // hash password generation
        const salt = await bcrypt.genSalt(10);

        // hash password 
        const hashedPassword = await  bcrypt.hash(user.password,salt);

        //overrride the plain text with hased password 
        user.password = hashedPassword;
        user.confirmPassword = hashedPassword;
        next();
    }catch(err){
        return next(err);
    }
})
userSchema.methods.comparePassword = async function(candidatePassword){
    try{
        // use bcrypt to compare the provided password with the hashed password
        const isMatch = await bcrypt.compare(candidatePassword,this.password);
        return isMatch ;
    }catch(err){
        throw err;
    }

}


// crate user model 
const user = mongoose.model("user",userSchema);
module.exports = {user}