//import order module
Tax = require('./taxModel');
// Handle index actions
exports.index = function (req, res) {
    Tax.get(function (err, taxs) {
            if (err) {
                res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Orders retrieved successfully",
            data: taxs
        });
    });
};
exports.new = function (req, res) {
    var tax = new Tax();
    tax.t1 = req.body.t1;
    tax.t2 = req.body.t2;
    tax.t3 = req.body.t3;
    tax.t4 = req.body.t4;
    tax.t5 = req.body.t5;
    tax.t6 = req.body.t6;
    tax.t7 = req.body.t7;
    tax.t8 = req.body.t8;
    tax.t9 = req.body.t9;
    tax.t10 = req.body.t10;
    tax.t11 = req.body.t11;
    tax.t12 = req.body.t12;
    tax.t13 = req.body.t13;
    tax.t14 = req.body.t14;
    // save the order and check for errors   
    tax.save(function (err) {
        res.json({
            message: 'New order created!',
            data: tax
        });
    });
};