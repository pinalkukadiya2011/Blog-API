var express = require('express');
var router = express.Router();

const admin  = require('../controller/admincontroller');
const blogger = require('../controller/bloggercontroller');
const blog = require('../controller/blogcontroller');
const user = require('../controller/usercontroller');




//========================= admin =================================
router.post('/adminlogin',admin.login)
router.get('/adminlogout',admin.logout)
// admin side blog
router.get('/viewposts',admin.viewpost)
router.post('/posts/:id/verify',admin.verified)
router.get('/posts/unverified',admin.unverified)

// add the blog
router.post('/category',admin.addCategory)
// blog manage
router.post('/updateblog/:id',admin.update)
router.get('/deleteblog/:id',admin.delete)
// blogger manage
router.post('/bloggerupdate/:id',admin.updateblogger)
router.get('/bloggerdelete/:id',admin.deleteblogger)
// manage user
router.post('/updateuser/:id',admin.updateuser)
router.get('/deleteuser/:id',admin.deleteuser)



//=============================== blogger===========================
router.post('/bloggerregister',blogger.register)
router.post('/bloggerlogin',blogger.login)
router.get('/bloggerlogout',blogger.logout)
// blogger side blog
router.post('/posts',blog.addpost)
router.get('/viewposts',blog.viewpost)
router.get('/posts/unverified',blog.unverified)
router.get('/posts/verified',blog.verifiedposts)
// blogger blog update and delete
router.post('/posts/update/:id',blog.update)
router.get('/posts/delete/:id',blog.delete)

// ============================== user ==============================
router.post('/userregister',user.register)
router.post('/userlogin',user.login)
router.post('/userlogout',user.logout)
router.get('/viewpost',user.viewpost)
router.get('/Get_Single_Post/:id',user.singlepost)





module.exports = router;
