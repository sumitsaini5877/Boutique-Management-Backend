const router = require("express").Router();

const {demo,signUp} =require('../controllers/login.controller')

router.route('/').get(demo)
router.route('/signup').post(signUp)


module.exports=router



