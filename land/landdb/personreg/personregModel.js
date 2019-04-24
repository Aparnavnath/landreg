// clientModel.js
var mongoose = require('mongoose');
// Setup schema
var personregSchema = mongoose.Schema({
    Fullname: {
        type:String,
        required: true  
    },
    Aadharnumber: {
        type:String,
        required: true  
    },
    EmailId: {
        type:String,
        required: true  
    },
    Address: {
        type:String,
        required: true  
    },
    phonenumber: {
        type:Number,
        required: true  
    },
    Password: {
        type:String,
        required: true  
    },
    RenterPassword: {
        type:String,
        required: true  
    },
    Category: {
        type:String,
        required: true  
    },
    bcaccount:{
        type:String,
        required:true
    }
});
        // Export order model 
        var personreg = module.exports = mongoose.model('personreg', personregSchema);
        module.exports.get = function (callback, limit) {
        personreg.find(callback).limit(limit);
        }