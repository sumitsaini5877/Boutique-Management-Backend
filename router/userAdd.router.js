const router = require('express').Router();

const {addUser}=require('../controllers/userAdd.controller')


router.route('/addUser').get(addUser)

module.exports = router;