const express= require('express')
const {ifAuthenticateduser} = require('../middleware/auth')
const {cartadd, cartview,cartdel,cartDelAll} = require("../controller/cart.controller")

const router =  express.Router()
//* Route for add to cart
router.route('/cart').post(ifAuthenticateduser,cartadd)
//* Route for get all items in the cart
router.route('/carts').get(ifAuthenticateduser,cartview)
//* Route for remove items from cart 
router.route('/cart/r').delete(ifAuthenticateduser,cartdel)
//* Route for remove all items from cart
router.route('/cart/all').delete(ifAuthenticateduser,cartDelAll)
module.exports=router