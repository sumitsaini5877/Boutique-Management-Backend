const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;
const userDB = require('../models/user.model');

passport.use(new LocalStrategy(async (email,password,done)=>{
    try{
        const exitingEmail = await userDB.findOne({email:email});
        if(!exitingEmail){
            return done(null,false,{message:"Incorrect Email"})
        }
        const exitingPassword = exitingEmail.password == password ? true : false;
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


