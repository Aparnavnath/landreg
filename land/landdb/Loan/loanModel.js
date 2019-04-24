// clientModel.js
var mongoose = require('mongoose');
// Setup schema
var loanSchema = mongoose.Schema({
        PropertyRegisterNumber: {
        type: Number,
        required: true
            },
            Acrecentofpropertyused: {
                type: Number,
                required: true
                    },
                    LoanOption: {
                        type: String,
                        required: true
                            },
                            price: {
                                type: String,
                                required: true
                                    }
                 
          }); 
        // Export order model 
        var loan = module.exports = mongoose.model('loan', loanSchema);
        module.exports.get = function (callback, limit) {
        loan.find(callback).limit(limit);
        }