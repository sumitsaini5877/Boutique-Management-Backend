const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;
const {user} = require('../models/user.model');

passport.use(new LocalStrategy(async (username,password,done)=>{
    try{
        console.log("username",username,"password",password);
        const exitingEmail = await user.findOne({username});
       console.log(exitingEmail);
        if(!exitingEmail){
            return done(null,false,{message:"Incorrect Email"})
        }
        const exitingPassword = exitingEmail.comparePassword(password);
        
        if(exitingPassword){
            return done(null,exitingEmail)
        }else{
            return done(null,false,{message:"Incorrect password"})
        }
    }catch(err){
        return done(err)
    }
}));
module.exports = passport;


