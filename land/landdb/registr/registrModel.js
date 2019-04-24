// clientModel.js
var mongoose = require('mongoose');
// Setup schema
var registerSchema = mongoose.Schema({
        PropertyRegisterNumber: {
        type: Number,
        required: true
            },
            PropertyRegisterdate : {
            type: Date,
            required: true
            },
            OwnerDetails : {
                type:String,
                required: true
                },
                PreviousOwnerDetails : {
                    type:String,
                    required: true
                    },
                    TypeOfLand : {
                        type:String,
                        required: true
                        },
                        Acreorsqft : {
                            type:String,
                            required: true
                            },
                            PayingLandTax : {
                                type:String,
                                required: true
                                },
                            Username : {
                                type:String,
                                required: true
                                },
                                Password : {
                                    type:String,
                                    required: true
                                    },
                                    ReenterPassword : {
                                        type:String,
                                        required: true
                                        },
                                        Nominies : {
                                            type:String,
                                            required: true
                                            }
       
     
});
// Export order model
var register = module.exports = mongoose.model('register', registerSchema);
module.exports.get = function (callback, limit) {
register.find(callback).limit(limit);
}