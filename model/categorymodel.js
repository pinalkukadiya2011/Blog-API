const mongoose = require('mongoose');

// const categoryschema = new mongoose.Schema({
//    name:{
//     type:String,

//    },
 
// });


// module.exports = mongoose.model('category', categoryschema);


const categorySchema = new mongoose.Schema({

    category: {
       type: String, 
   }
  }, {timestamps: true});                   
 
 
 module.exports = mongoose.model('category',categorySchema);



 
