const userDB = require('../models/user.model');
const userModel = userDB.user;



 const demo = async (req,res)=>{
    res.send({
        message:"this is demo ",
    });
}
const signUp = async(req,res)=>{
    var name = req.body.name;
    var email  = req.body.email;
    var password = req.body.password;
    var confirmPassword = req.body.confirmPassword;

    if(!name && !email && !password && !confirmPassword){
        res.json({
            success:true,
            status:200,
            Data:[{
                "Name":name,
                "Email":email,
                "Password":password,
                "Confirm_Password":confirmPassword
            }]
        })
      
    }else{


    res.send({
        success:false,
        status:404,
        message:"Fill this empty feild"

    })
}
}





module.exports={demo,signUp};