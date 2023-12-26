var blogmodel = require('../model/blogmodel');

// =============================================add Blog========================================= 

exports.addpost = async(req,res) => {
   const  category_data= await blogmodel.find({category:req.body.category});
      
      if( category_data.length > 0)
      {
            if(req.body.category == category_data[0].category)
            {
                var data = await blogmodel.create(req.body);
                res.status(200).json({
                    status:"Success",
                    data
                })
            }
      }
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


// ====================================delete the blog====================================
exports.delete = async(req,res) => {
    id=req.params.id;
    var delete_data = await blogmodel.findByIdAndDelete(id);
    res.status(200).json({
        status:"data deleted",
        delete_data
    }) 
}

// ==================================update the blog====================================
exports.update = async(req,res) => {
    id=req.params.id;
    var update_data = await blogmodel.findByIdAndUpdate(id,req.body);
    res.status(200).json({
        status:"data updated success",
        update_data
    }) 
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

// =========================view verified blog show ========================
exports.verifiedposts = async(req,res) => {
    var verifiedPosts = await blogmodel.find({verified:true});
    if(verifiedPosts.length > 0){
        res.status(200).json({
           status:"All Verified Blog",
            verifiedPosts
          });
    }
    else{
        
        res.status(200).json({
            status:"Error"
        });
    }
}                
             
// =========================add blog ============================


// exports.addblog = async(req,res) => {                                
//     var data = await blogmodel.create(req.body);
//     if(data.length > 0){     
//         res.status(200).json({
//             status:"Blog already post "
//         });
//     }
//     else{  
//               res.status(200).json({
//             status:"Blog Post Successfully",    
//             data
//        });
//     }
// }      
// }

                                                                                                                   



