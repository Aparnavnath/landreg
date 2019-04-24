// clientModel.js
var mongoose = require('mongoose');
// Setup schema
var buyerSchema = mongoose.Schema({
    PropertyRegisterNumber: {
        type: Number,
        required: true
    },
    CurrentOwnerName: {
        type: String,
        required: true
    },
    CurrentOwnerAddress: {
        type: String,
        required: true
    },
    Contact: {
        type:Number,
        required: true
    },
    PreviousOwnerAddress: {
        type: String,
        required: true
    },
    TypeOfLand: {
        type: String,
        required: true
    },
    PreviousLandRentDetails: {
        type: String,
        required: true
    },
    PossessionCertificate: {
        type: String,
        required: true
    },
    Acre: {
        type: String,
        required: true
    },
    Shapeofland: {
        type: String,
        required: true
    },
    Locationofland: {
        type: String,
        required: true
        },
    EncumbranceCertificate: {
        type: String,
        required: true
    },
    Verified: {
        type: String,
        required: true
    },
    AgreedAmount: {
        type: String,
        required: true
        }
         }); 
        // Export order model   
        var buyer = module.exports = mongoose.model('buyer', buyerSchema); 
        module.exports.get = function (callback, limit) {
        buyer.find(callback).limit(limit);
        }