const mongoose = require('mongoose');


var bloggerschema = new mongoose.Schema({
    
    email:{
        type:String
    },
    password:{
        type:String
    },
});


module.exports = mongoose.model('blogger',bloggerschema);


