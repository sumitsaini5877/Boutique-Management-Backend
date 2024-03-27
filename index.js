const express = require('express');
const app = express();
const port = 3000;




// For Mongoose Connection 
 const db = require('./utils/dbconnection')
 db.connectDB();



//For Middelware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//For Routes

const user = require('./router/user.router')






app.use("/api/user",user)






app.listen(port,()=>{

    console.log(`server is running on port :${port}`);
});
