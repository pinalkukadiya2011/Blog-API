const mongoose = require('mongoose');


var userschema = new mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
});


module.exports = mongoose.model('user',userschema);


