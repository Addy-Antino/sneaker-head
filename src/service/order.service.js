const ErrorHandler = require('../utils/errorHandler')
const   Order =  require("../model/ordermodel")
const Product = require("../model/product.model");
const { findById } = require('../model/ordermodel');

//*create order service 
const CreateOrder = async(address,
  city,
  state,
  country,
  pinCode,
  phoneNo,
  card_no,
  
  user)=>{

const order = await Order.create({
  address,
  city,
  state,
  country,
  pinCode,
  phoneNo,
  card_no,
  user: user,
  });
return order

}
 

//*view order service 

const getOrder =  async(id) =>{
  const query ={ user:id}
  const order = await Order.find(query)
  return order
  
}

//*cancel order 

const cancelOrder  = async(user,id)=>{

const order=await Order.findById(id);
if(!order) throw new ErrorHandler("Order not found!",404)




if(order.user !== user){
  throw new ErrorHandler("You are not allowed to cancel this order",401)
}

const neworder = await Order.findByIdAndDelete(id)
return neworder
}





module.exports =  { CreateOrder,getOrder,cancelOrder}