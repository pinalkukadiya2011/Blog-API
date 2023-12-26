var usermodel = require('../model/usermodel');
var blogmodel = require('../model/blogmodel');

const storage = require('node-persist');

// ================================== user registration==================================
exports.register = async (req,res) =>{
    var user = await usermodel.find({email : req.body.email});

    if(user.length > 0){
        res.status(200).json({
            status : 'Blogger Already Exist',
        });
    }
    else{
        var data = await usermodel.create(req.body);

        res.status(200).json({
            status : 'Data Inserted Successfully',
            data
        });          
    }
}



//================================================== user login=====================================
exports.login = async (req, res) => {

var user = await usermodel.find({email: req.body.email});
//    login_data=user[0].id;

        await storage.init(  );
        var user_login = await storage.getItem('blogger_login')

if(user_login==undefined)
     {  
      if(user.length == 1 )
       {
             if(req.body.password == user[0].password)
              {
                await storage.init(  );
                await storage.setItem('user_login',user[0].id)
                         res.status(200).json({
                            status : "user Login Successfully",
                         });
              }
             
             else{
                        res.status(200).json({
                            status : "Wrong Password"
                        })
                }
        }
        else
        {
            res.status(200).json({
                status : "Blogger Not Exists"
            });
        }
    }
    else{
        res.status(200).json({
            status:"Blogger Is Already Login"
        })
    }
    

    
};

//============================================= user logout=====================================
exports.logout = async (req,res) =>{
    await storage.init();
    await storage.clear();
     res.status(200).json({
            status:"Logout"
        });
}

// ==========================view blog ===========================
exports.viewpost = async(req,res) => {
    var data = await blogmodel.find();
    if(data.length > 0){
        res.status(200).json({   
            status:"Error"
        });  
    
    }
    else{
            res.status(200).json({
                status:"All Posts",
                data
        });      
    }
}

// ================================== single posts =================================

exports.singlepost = async(req,res) => {
    var single_post_data = await blogmodel.find({"category":req.body.category});
    if(single_post_data.length == 0){
        var data = await blogmodel.find();
        res.status(200).json({
            status:"success",
            data
        });
    }
    else{
            res.status(200).json({
                status:"All Posts",
                data
            });
    }
}


// ================================ category wise blog show ============================

// exports.categorywiseblog = async(req,res) => {
    
//     var data = await blogmodel.findById(id);
//     if(data.length > 0){
//         res.status(200).json({
//             status:"Error"
//         });
//     }
//     else{
//             res.status(200).json({
//                 status:"All Posts",
//                 data
//             });
//     }
// }













