
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SomeModelSchema = new Schema({
username: String,
password: String
});

// Compile model from schema
var SomeModel = mongoose.model('registers', SomeModelSchema );

module.exports=SomeModel;
