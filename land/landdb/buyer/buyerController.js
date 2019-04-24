//import order module
Buyer = require('./buyerModel');
// Handle index actions

exports.index = function (req, res) {
Buyer.get(function (err, buyers) {
if (err) {
res.json({
status: "error",
message: err,
});
}
res.json({
status: "success",
message: "Orders retrieved successfully",
data: buyers
});
});
};
exports.new = function (req, res) {
    console.log(req);
    console.log('validating inputs');
    req.check('PropertyRegisterNumber', 'invalid PropertyRegisterNumber').isNumeric().isLength({max: 10});
    req.check('PossessionCertificate', 'invalid PossessionCertificate adress').isNumeric().isLength({max: 10});
    req.check('EncumbranceCertificate', 'invalid EncumbranceCertificate').isNumeric().isLength({max: 10});
    req.check('PreviousLandRentDetails', 'invalid PreviousLandRentDetails').isNumeric().isLength({max: 10});
    req.check('Contact', 'invalid Contact').isNumeric().isLength({min: 10}).isLength({max: 10});
    var errors=req.validationErrors();
    console.log(errors);
    if(errors) {
    res.json({
    status: "error",
    message: errors,
    });
    }
    else
    {
    var buyer = new Buyer();
    buyer.PropertyRegisterNumber = req.body.PropertyRegisterNumber;
    buyer.CurrentOwnerName = req.body.CurrentOwnerName;
    buyer.CurrentOwnerAddress = req.body.CurrentOwnerAddress;
    buyer.PreviousOwnerAddress = req.body.PreviousOwnerAddress;
    buyer.TypeOfLand = req.body.TypeOfLand;
    buyer. PreviousLandRentDetails = req.body. PreviousLandRentDetails;
    buyer. PossessionCertificate = req.body. PossessionCertificate;
    buyer.EncumbranceCertificate = req.body. EncumbranceCertificate;
    buyer. Verified = req.body. Verified;
    buyer. AgreedAmount = req.body.AgreedAmount;
    buyer.Shapeofland = req.body.Shapeofland;
    buyer.Locationofland = req.body.Locationofland;
    buyer.Acre = req.body.Acre;
    buyer.Contact = req.body.Contact;
    
    // save the order and check for errors Locationoflan
buyer.save(function (err) {
    // if (err)
    // res.json(err);
    res.json({
    message: 'New order created!',
    data: buyer
    });
    });
};
}