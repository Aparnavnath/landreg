//import order module
Register = require('./registrModel');
// Handle index actions

exports.index = function (req, res) {
Register.get(function (err, registers) {
if (err) {
res.json({
status: "error",
message: err,
});
}
res.json({
status: "success",
message: "Orders retrieved successfully",
data: registers
});
});
};
exports.new = function (req, res) {
    
var register = new Register();
register.PropertyRegisterNumber = req.body.PropertyRegisterNumber;
register.PropertyRegisterdate = req.body.PropertyRegisterdate;
register.OwnerDetails = req.body. OwnerDetails;
register.PreviousOwnerDetails = req.body.PreviousOwnerDetails;
register.TypeOfLand = req.body.TypeOfLand;
register.Acreorsqft = req.body.Acreorsqft;
register.PayingLandTax = req.body.PayingLandTax;
register.Username = req.body.Username;
register.Password = req.body.Password;
register.ReenterPassword = req.body.ReenterPassword;
register.Nominies = req.body.Nominies;

// save the order and check for errors   
register.save(function (err) {
// if (err)
// res.json(err);
res.json({
message: 'New order created!',
data: register
});
});
};