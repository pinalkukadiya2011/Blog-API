const mongoose = require('mongoose');

const blogpostschema = new mongoose.Schema({

    title: String,
    content: String,
    author: String,
    createdAt: { type: Date, default: Date.now },
    verified:{ type: Boolean , default:false },
    category:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"category"  
    }
});


module.exports = mongoose.model('blogpost', blogpostschema);


// const categorySchema = new mongoose.Schema({

//   name: {
//       type: String, 
//   }

// }, {timestamps: true});


// module.exports = mongoose.model('postcategory',categorySchema);