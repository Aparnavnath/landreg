// clientModel.js
var mongoose = require('mongoose');
// Setup schema
var taxSchema = mongoose.Schema({
    t1: {
        type: String,
        required: true
    },
    t2: {
        type: String,
        required: true
    },
    t3: {
        type: String,
        required: true
    },
    t4: {
        type: String,
        required: true
    },
    t5: {
        type: String,
        required: true
    },
    t6: {
        type: String,
        required: true
    },
    t7: {
        type: String,
        required: true
    },
    t8: {
        type: String,
        required: true
    },
    t9: {
        type: String,
        required: true
    },
    t10: {
        type: String,
        required: true
    },
    t11: {
        type: String,
        required: true
    },
    t12: {
        type: String,
        required: true
    },
    t13: {
        type: String,
        required: true
    },
    t14: {
        type: String,
        required: true
    },
                                                                                                                                    
});
// Export order model
var tax = module.exports = mongoose.model('tax', taxSchema);
module.exports.get = function (callback, limit) {
    tax.find(callback).limit(limit);
}