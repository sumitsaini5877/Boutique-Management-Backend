const router = require("express").Router();

const {demo,signUp,logIn} =require('../controllers/login.controller')

router.route('/').get(demo)
router.route('/signup').post(signUp)
router.route('/login').post(logIn)


module.exports=router



