// clientModel.js
var mongoose = require('mongoose');
// Setup schema
var govrSchema = mongoose.Schema({
        PropertyRegisterNumber: {
        type: Number,
        required: true
            },
            ownerdetails: {
                type: String,
                required: true
                    },
                    Notifications: {
                        type: String,
                        required: true
                            }
          }); 
        // Export order model 
        var govr = module.exports = mongoose.model('govr', govrSchema);
        module.exports.get = function (callback, limit) {
        govr.find(callback).limit(limit);
        }