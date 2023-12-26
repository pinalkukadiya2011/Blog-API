var bloggermodel = require('../model/bloggermodel');
const storage = require('node-persist');

// ==================================blogger registration==================================
exports.register = async (req,res) =>{
    var blogger = await bloggermodel.find({email : req.body.email});

    if(blogger.length > 0){
        res.status(200).json({
            status : 'Blogger Already Exist',
        });
    }
    else{
        var data = await bloggermodel.create(req.body);

        res.status(200).json({
            status : 'Data Inserted Successfully',
            data
        });
    }
}

//================================================== blogger login=====================================
exports.login = async (req, res) => {

var blogger = await bloggermodel.find({email: req.body.email});
//    login_data=user[0].id;

        await storage.init(  );
        var blogger_login = await storage.getItem('blogger_login')

if(blogger_login==undefined)
     {  
      if(blogger.length == 1 )
       {
          
              if(req.body.password == blogger[0].password)
              {
                await storage.init(  );
                await storage.setItem('blogger_login',blogger[0].id)
                         res.status(200).json({
                            status : "Blogger Login Successfully",
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

//============================================= blogger logout=====================================
exports.logout = async (req,res) =>{
    await storage.init();
    await storage.clear();
     res.status(200).json({
            status:"Logout"
        });
}













