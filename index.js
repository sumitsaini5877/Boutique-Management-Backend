const express = require('express');
const app = express();
const port = 3000;

const passport = require('./middleware/auth')


// For Mongoose Connection 
 const db = require('./utils/dbconnection')
 db.connectDB();



//For Middelware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//For Auth 
app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local',{session:false})

//For Routes

const user = require('./router/user.router');
const addUser = require('./router/userAdd.router');






app.use("/api/user",user)
app.use("/api/ADDuser",localAuthMiddleware,addUser)






app.listen(port,()=>{

    console.log(`server is running on port :${port}`);
});
