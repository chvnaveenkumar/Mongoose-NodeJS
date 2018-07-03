var mongoose = require('mongoose');

var user = mongoose.model('User',{
    name:{
        type: String,
        required: true,
        minlength: 1
    },
    age:{
        type: Number,
        default: null
    }
});

module.exports = {user};