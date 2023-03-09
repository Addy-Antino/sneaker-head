const ErrorHandler =  require("../utils/errorHandler")
const catchAsync = require("../middleware/catchAsync");
const { CreateOrder,getOrder,cancelOrder } = require("../service/order.service");

//create new order
exports.newOrder= catchAsync(async(req,res,next)=>{
    const {
        address,
        city,
        state,
        country,
        pinCode,
        phoneNo,
        card_no,
        


      } = req.body;
    const user = req.user.id
      const order = await CreateOrder(
         address,
        city,
        state,
        country,
        pinCode,
        phoneNo,
        card_no,
       
        user
      );
    
      res.status(201).json({
        success: true,
        order,
      });

})

//get new orders 

exports.getOrders= catchAsync(async(req,res,next)=>{
  const id = req.user.id;
  const order=  await getOrder(id)
  res.status(200).json({
    success:true,
    order
  })
})

//cancel order


exports.cancelOrder= catchAsync(async(req,res,next)=>{
  const user = req.user.id;
  const id=req.params.id 
  const cOrder =await cancelOrder(user,id)
  res.status(204).json({
    success:true,
    cOrder
  })
  
})