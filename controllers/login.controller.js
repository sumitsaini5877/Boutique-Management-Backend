const userDB = require('../models/user.model');
const userModel = userDB.user;



 const demo = async (req,res)=>{
    res.send({
        message:"this is demo ",
    });
}






module.exports={demo};