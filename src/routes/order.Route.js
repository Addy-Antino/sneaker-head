const express= require('express');
const { ifAuthenticateduser } = require('../middleware/auth');
const { newOrder,getOrders,cancelOrder } = require ('../controller/order.controller')

const router = express.Router();

//* For new order 
router.route('/order/new').post(ifAuthenticateduser,newOrder)
//* For getting the orders
router.route('/orders').get(ifAuthenticateduser,getOrders)
//* For cancel a particular order
router.route('/cancel/order/:id').delete(ifAuthenticateduser,cancelOrder)


module.exports=router