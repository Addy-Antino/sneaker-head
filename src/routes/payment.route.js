const express= require('express');

const {processPayment} =require("../controller/payment.controller")

const router = express.Router();
//* For payment gateway integration
router.route('/payment').post(processPayment)

module.exports=router