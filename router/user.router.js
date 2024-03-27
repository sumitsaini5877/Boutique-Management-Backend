const router = require("express").Router();

const {demo} =require('../controllers/login.controller')

router.route('/').get(demo)


module.exports=router



