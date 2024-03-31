const addUserDB = require('../models/userAdd.model')
const addUserModel = addUserDB.addUser;


const addUser = (req,res)=>{
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


        res.status(200).json({
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
    console.error('Error:',err);
    res.status(500).json({
        status:500,
        success:false,
        message:"Internal server issue"
    })
}

}

module.exports = {addUser}