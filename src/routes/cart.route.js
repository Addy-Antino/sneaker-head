const express= require('express')
const {ifAuthenticateduser} = require('../middleware/auth')
const {cartadd, cartview,cartdel} = require("../controller/cart.controller")

const router =  express.Router()
//route for raising help
router.route('/cart').post(ifAuthenticateduser,cartadd)
router.route('/carts').get(ifAuthenticateduser,cartview)
router.route('/cart/r').delete(ifAuthenticateduser,cartdel)
module.exports=router