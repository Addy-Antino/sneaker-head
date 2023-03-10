const express= require('express');
const { ifAuthenticateduser } = require('../middleware/auth');
const { createAccount, loginforUser,forgotPassword,verifyacc,resetPassword, getUserProfile, deleteUserProfile, logoutforuser, updatePassword, updateProfile } = require('../controller/user.controller');

const router = express.Router();
//* User register
router.route('/register').post(createAccount)
//* User login
router.route('/login').post(loginforUser)
//* User verification
router.route('/verify/:id/:token').get(verifyacc)
//* User logout
router.route('/logout').get(ifAuthenticateduser,logoutforuser)
//* User update password
router.route('/update/pass').put(ifAuthenticateduser,updatePassword)
//* User profile update
router.route('/me/update').put(ifAuthenticateduser,updateProfile)
//* User password forgot
router.route("/password/forgot").post(forgotPassword);
//* User password reset token send via mail
router.route("/password/reset/:token").put(resetPassword);
//* User profile show 
router.route("/user/me").get(ifAuthenticateduser, getUserProfile)
//* User profile delete
router.route("/delete/user/me").delete(ifAuthenticateduser,deleteUserProfile)


module.exports=router
