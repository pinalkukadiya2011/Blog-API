var loginmodel = require('../model/adminmodel');
var blogmodel = require('../model/blogmodel');
var bloggermodel = require('../model/bloggermodel');
var categorymodel = require('../model/categorymodel');
var usermodel = require('../model/usermodel');


const storage = require('node-persist');



//============================ admin login========================================

exports.login = async (req,res) => {
   
        var data = await loginmodel.find({email:req.body.email});

        await storage.init(  );
        var login_data = await storage.getItem('login_data')
       
        if(login_data == undefined)
       {
         if(data.length == 1)
         {
             if(req.body.password == data[0].password )
             {
                await storage.init(  );
                await storage.setItem('login_data',data[0].id)
                  res.status(200).json({
                    status:"Admin Login Successfully"
                  })
             }
             else{
                res.status(200).json({
                    status:"Check YOur Password"
                })
             }
         }
         else
         {
            res.status(200).json({
                status:"Check Your Email Address"
            })
         }
       }
       else
       {
        res.status(200).json({
            status:"Admin Is Already Login"
        })
       }
  
}

// ================================ view the posts============================
exports.viewpost = async(req,res) => {
  var data = await blogmodel.create(req.body);
  if(data.length > 0){
      res.status(200).json({
          status:"Error"
      });
  }
  else{
          res.status(200).json({
          data
      });
  }
}

//=============================== verified posts true===============================
exports.verified = async(req,res) => {
    const id = req.params.id;
    var post = await blogmodel.findByIdAndUpdate(id,req.body);

    if(!post)
    {
        res.status(200).json({
            status:"Post Not Found"
        });
    }
   else{
        // post.verified = true;
        res.status(200).json({
            
            post
         })
    }
}

//======================= view unverified blog  ====================
exports.unverified = async(req,res) => {
    var unverifiedPosts = await blogmodel.find({verified:false});
    if(unverifiedPosts.length > 0){
        res.status(200).json({
            status:"All Unverified Blog",
            unverifiedPosts
        });
    }
    else{
        
        res.status(200).json({
            status:"Error"
        });
    }
}


// ====================================delete the blog====================================
exports.delete = async(req,res) => {
    id=req.params.id;
    var delete_data = await blogmodel.findByIdAndDelete(id);
    res.status(200).json({
        status:"Blog Deleted",
        delete_data
    }) 
}

// ==================================update the blog====================================
exports.update = async(req,res) => {
    id=req.params.id;
    var update_data = await blogmodel.findByIdAndUpdate(id,req.body);
    res.status(200).json({
        status:"Blog Updated",
        update_data
    }) 
}


// =============================blogger update ====================================
exports.updateblogger = async(req,res) => {
    id=req.params.id;
    var update_data = await bloggermodel.findByIdAndUpdate(id,req.body);
    res.status(200).json({
        update_data
    }) 
}

// ============================blogger delete=====================================
exports.deleteblogger = async(req,res) => {
    id=req.params.id;
    var delete_data = await bloggermodel.findByIdAndDelete(id);
    res.status(200).json({
        delete_data
    }) 
}

// ========================== update user =======================================
exports.updateuser = async(req,res) => {
    id=req.params.id;
    var update_data = await bloggermodel.findByIdAndUpdate(id,req.body);
    res.status(200).json({
        update_data
    }) 
}

// ========================== delete user =======================================
exports.deleteuser = async(req,res) => {
    id=req.params.id;
    var delete_data = await bloggermodel.findByIdAndDelete(id);
    res.status(200).json({
        delete_data
    }) 
}
// ========================  create a new Category ==========================================
exports.addCategory = async(req,res) => {
    var data = await categorymodel.create(req.body);
    if(data.length > 0){
        res.status(200).json({
            status:"already category added"
        });
    }
    else{
            res.status(200).json({
             status:"Category Added",
            data
        });
    }
}







// exports.verified = async(req,res) => {
//     const id = req.params.id;
//     var post = await blogmodel.findById(id);

//     if(!post)
//     {
//         res.status(200).json({
//             status:"Post Not Found"
//         });
//     }
//    else{
//         post.verified = true;
//         res.status(200).json({
//             post

//         })
//    }
   

// }





exports.logout = async (req,res) =>{
  await storage.init();
  await storage.clear();
   res.status(200).json({
          status:"Logout"
      });
  }