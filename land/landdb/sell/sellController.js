//import order module
Sell = require('./sellModel');
// Handle index actions

exports.index = function (req, res) {
Sell.get(function (err, sells) {
if (err) {
res.json({
status: "error",
message: err,
});
}
res.json({
status: "success",
message: "Orders retrieved successfully",
data: sells
});
});
};
exports.new = function (req, res) {
var sell = new Sell();
sell.Buyername = req.body.Buyername;
sell.ForAuthentication = req.body.ForAuthentication;
sell.agreedamount = req.body.agreedamount;
sell.Acreneeded = req.body.Acreneeded;
sell.Contact=req.body.Contact;

// save the order and check for errors   
sell.save(function (err) {
// if (err)
// res.json(err);
res.json({
message: 'New order created!',
data: sell
});
});
};