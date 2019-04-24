// clientModel.js
var mongoose = require('mongoose');
// Setup schema
var sellSchema = mongoose.Schema({
    Buyername: {
        type: String,
        required: true
            },
            ForAuthentication: {
                type: Number,
                required: true
                    },
                    agreedamount: {
                        type: Number,
                        required: true
                            },
                            Acreneeded: {
                                type: Number,
                                required: true
                                    },
                                    Contact: {
                                        type: Number,
                                        required: true
                                            },
            
                            
        });
        // Export order model
        var sell = module.exports = mongoose.model('sell', sellSchema);
        module.exports.get = function (callback, limit) {
        sell.find(callback).limit(limit);
        }