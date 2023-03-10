**User Routes **

 

Create user API :  https://sneaker-head-1.adityarupdatta.repl.co/api/v1/new/product 

 

This API takes Name , email and password as an input  and will save it to the database but there are some restrictions your mail should be unique and your name must be exceeding 4 characters. It will save the information to the database but you cant login until your mail is verified. As soon as you click the submit button you will receive a mail for email verification after clicking this link you will be verified and redirected to the login page and  you can login again using you credentials. 

 ---------------------------------------------------------------------------------------------------------- 

Login user API : https://sneaker-head-1.adityarupdatta.repl.co/api/v1/login 

 

This API takes Email & Password as an input and will log you in to the dashboard and at the same time it will generate a auth token and will save it on the database and cookies so you don’t have to login again 

-----------------------------------------------------------------------------------------------------------

Email verification API  : 

{{front_end_url}}/api/v1/verify/6403551c73878d016fed8a9f/3e1ccfc2d683bdf28aad9cfacf241833c6685225cae41c45bb14904c2ab4a3c4   

This API contains two part your unique user id and the auth token when there will be hit to this Api it will verify your email and give you privilege to login. 

 ---------------------------------------------------------------------------------------------------------- 

Logout user api : https://sneaker-head-1.adityarupdatta.repl.co/api/v1/logout 

This api will set your cookies to null so you will be log out. 
 
 ----------------------------------------------------------------------------------------------------------
 
My profile section api  : https://sneaker-head-1.adityarupdatta.repl.co/api/v1/user/me 

This api will show your information that you have given at the time of registration 

----------------------------------------------------------------------------------------------------------

Forgot password api :   

https://sneaker-head-1.adityarupdatta.repl.co/api/v1/password/forgot 

This API will take your email as an input and if your email is registered it will send you a password reset link on your registered email id. 

 ----------------------------------------------------------------------------------------------------------
 

Reset password : 

{{fornt_end_url}}/api/v1/password/reset/{{reset_token}} 

You will be getting  this kind of link on your email as soon as you click the forgot password button after giving registered email id  and with it you can change your password. 

 ----------------------------------------------------------------------------------------------------------
 
Update Password : 

https://sneaker-head-1.adityarupdatta.repl.co/api/v1/update/pass 

Using this api you can update your password .This api takes three field as an input old password,new password and  confirm password 

 ---------------------------------------------------------------------------------------------------------- 

Update profile: 

https://sneaker-head-1.adityarupdatta.repl.co/api/v1/me/update 

Using this api you can update your profile your name and email. 

 ---------------------------------------------------------------------------------------------------------- 

Delete Profile: 

https://sneaker-head-1.adityarupdatta.repl.co/api/v1/delete/user/me 

Using this api you can delete your profile from the database at first it will set the cookie to null so that you  can login new user on your browser hassle free. 

 ---------------------------------------------------------------------------------------------------------- 
**Product routes **

Create Product: 

https://sneaker-head-1.adityarupdatta.repl.co/api/v1/new/product 

This api takes 7 fields as an input that includes name,email,title,description,price,image and quantity or stock and it will create a product. 

 ---------------------------------------------------------------------------------------------------------- 

Get product 

https://sneaker-head-1.adityarupdatta.repl.co/api/v1/products 

This api is responsible for listing the users on the dashboard. 

 ---------------------------------------------------------------------------------------------------------- 

Update Product: 

https://sneaker-head-1.adityarupdatta.repl.co/api/v1/update/{{product_id}} 

This is responsible is for updating the product it can update fields like name , email,title,price,decription.It will take product_id as the parameter. 

 ---------------------------------------------------------------------------------------------------------- 

Delete Product 

https://sneaker-head-1.adityarupdatta.repl.co/api/v1/delete/product/{{product_id}} 

This module is responsible for deleting the product from dashboard listing.It will take the product id as the parameter. 

 ----------------------------------------------------------------------------------------------------------
 
**Order Route **

 
Create Order  

 https://sneaker-head-1.adityarupdatta.repl.co/api/v1/order/new 

It takes multiple fields including shipping information's like address , city , state , pin code , country , Ph no  and card no. 

 ----------------------------------------------------------------------------------------------------------
 Get Order 

https://sneaker-head-1.adityarupdatta.repl.co/api/v1/orders 

 
 It gives the orders you have created 
 
----------------------------------------------------------------------------------------------------------
Cancel order 

https://sneaker-head-1.adityarupdatta.repl.co/api/v1/cancel/order/{{order_id}} 

 

It  simply accepts the order unique id as a parameter and basically deletes the order. 

 ---------------------------------------------------------------------------------------------------------- 

**Cart Routes **

 

Create cart 

https://sneaker-head-1.adityarupdatta.repl.co/api/v1/cart 

It accepts product name, price , description, quantity , product_id , whats_for (This variable defines the product order is for rent or sale),image of the product ,email.By calling this api the product will be save on your cart 

 ----------------------------------------------------------------------------------------------------------
 

Get cart 

https://sneaker-head-1.adityarupdatta.repl.co/api/v1/carts 

 

This api fetches your previously saved products on your cart 

 ---------------------------------------------------------------------------------------------------------- 

Delete cart 

 

https://sneaker-head-1.adityarupdatta.repl.co/api/v1/carts/r 

 

This api only takes the product_id as the body and deletes it from your cart. 

 ---------------------------------------------------------------------------------------------------------- 


**Contact Us Route **

 

https://sneaker-head-1.adityarupdatta.repl.co/api/v1/help 

 

This api takes 4 attributes name , email , subject and message and save it to the database. 

 ---------------------------------------------------------------------------------------------------------- 

**Payment Gateway API **

https://sneaker-head-1.adityarupdatta.repl.co/api/v1/payment 

 This api takes amount as a body an will redirect you to stripes official payment gateway for checkout 

 
 ----------------------------------------------------------------------------------------------------------
 

 

 

 

 

 