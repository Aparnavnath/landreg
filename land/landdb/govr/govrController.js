//import order module
Govr = require('./govrModel');
// Handle index actions

exports.index = function (req, res) {
Govr.get(function (err, govrs) {
if (err) {
res.json({
status: "error",
message: err,
});
}
res.json({
status: "success",
message: "Orders retrieved successfully",
data: govrs
});
});
};
exports.new = function (req, res) {
var govr = new Govr();
govr.PropertyRegisterNumber = req.body.PropertyRegisterNumber;
govr.ownerdetails = req.body.ownerdetails;
govr.Notifications = req.body.Notifications;

// save the order and check for errors   
govr.save(function (err) {
    // if (err)
    // res.json(err);
    res.json({
    message: 'New order created!',
    data: govr
    });
    });
    };