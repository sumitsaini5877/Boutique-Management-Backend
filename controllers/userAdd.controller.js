const addUserDB = require('../models/userAdd.model')
const addUserModel = addUserDB.addUser;


const addUser = async (req,res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var address = req.body.address;
    

try{

    
    if(!name ||!phone || !address){
        res.status(400).json({
            status:400,
            success:false,
            message:"Fill empty feild"
        })
    }else{

        const newUser = new addUserModel({
            name: name,
            email: email,
            phone: phone,
            address: address
        });

        await newUser.save();

        return res.status(200).json({
            status:200,
            success:true,

            data:[
                {
                    "name":name,
                    "email":email,
                    "phone":phone,
                    "address":address
                }
            ]
        })
    }
    
    
}catch(err){
     if(err.code == 11000 && err.keyPattern && err.keyPattern.phone == 1){
        return res.status(400).json({
            status: 400,
            success: false,
            message: "Phone number is already taken"
        });
     }
  
    console.error('Error:',err);
    return res.status(500).json({
        status:500,
        success:false,
        message:"Internal server issue"
    })
}

}

// fetch all customer data and details
const allUser = async(req,res)=>{
    try{

    }catch(err){
        
    }
}

module.exports = {addUser}