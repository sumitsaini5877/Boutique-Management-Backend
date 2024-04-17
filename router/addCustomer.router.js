const router = require('express').Router();

const {addUser,allUser}=require('../controllers/addCustomer.controller')


router.route('/addUser').get(addUser)
router.route('/allUser').get(allUser)

module.exports = router;