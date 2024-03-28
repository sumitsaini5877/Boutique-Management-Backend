const userDB = require('../models/user.model');
const userModel = userDB.user;



 const demo = async (req,res)=>{
    res.send({
        message:"this is demo ",
    });
}
const signUp = async(req,res)=>{
    let name = req.body.name;
    let email  = req.body.email;
    let password = req.body.password;
    let confirmPassword = req.body.confirmPassword;

    try{
    
    if(!name || !email || !password || !confirmPassword){
        
    res.status(400).json({
        success:false,
        status:400,
        message:"Fill this empty feild"

    })
        
      
    }else{
        
    const signUp_data=new userModel({
        name:name,
        email:email,
        password:password,
        confirmPassword:confirmPassword
    });

    // Save the data to the database 
    signUp_data.save().then(savedData=>{
        console.log('data saved successfully',savedData);
    }).catch(err=>{
        console.log('Error saving data',err);
    })

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


}
}catch(error){
    console.error('Error:',error);
    res.status(500).json({
        message:"Internal server  error"
    });
}
}


const logIn = (req,res)=>{
    let email = req.body.email;
    let password = req.body.password;

    if(!email || !password){
        res.json({
            status:404,
            success:false,
            message:"Fill the  empty feild"
        })
       
    }else{
        
        res.json({
            success:true,
            status:200,
            data:[{
                "Email":email,
                "Password":password
            }]
        })
    }

}





module.exports={demo,signUp,logIn};