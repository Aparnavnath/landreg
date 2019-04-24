//import order module
Loan = require('./loanModel');
// Handle index actions

exports.index = function (req, res) {
Loan.get(function (err, loans) {
if (err) {
res.json({
status: "error",
message: err,
});
}
res.json({
status: "success",
message: "Orders retrieved successfully",
data: loans
});
});
};
exports.new = function (req, res) {
var loan = new Loan();
loan.PropertyRegisterNumber = req.body.PropertyRegisterNumber;
loan.Acrecentofpropertyused = req.body.Acrecentofpropertyused;
loan.LoanOption = req.body.LoanOption;
loan. price = req.body. price;

// save the order and check for errors   
loan.save(function (err) {
    // if (err)
    // res.json(err);
    res.json({
    message: 'New order created!',
    data: loan
    });
    });
    };