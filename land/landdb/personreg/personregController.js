//import order module
Personreg = require('./personregModel');
var Web3 = require('web3')
// Handle index actions
exports.index = function (req, res) {
    Personreg.get(function (err, personregs) {
        if (err) {
        res.json({
        status: "error",
        message: err,
    });
}
res.json({
status: "success",
message: "Orders retrieved successfully",
data: personregs
});
});
};
exports.new = function (req, res) {
    console.log(req);
console.log('validating inputs');
req.check('EmailId', 'invalid email adress').isEmail().require;
req.check('phonenumber', 'invalid phonenumber').isNumeric().isLength({min: 10}).isLength({max: 10});
req.check('Password','invalid').isLength({min: 8}).equals(req.body.RenterPassword);
req.check('RenterPassword','invalid').isLength({min: 8})
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
var personreg = new Personreg();
personreg.Fullname = req.body.Fullname;
personreg.Aadharnumber = req.body.Aadharnumber;
personreg.EmailId = req.body.EmailId;
personreg.Address = req.body.Address;
personreg.phonenumber = req.body.phonenumber;
personreg.Password = req.body.Password;
personreg.RenterPassword = req.body.RenterPassword;
personreg.Category= req.body.Category;
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
       personreg.bcaccount = web3.personal.newAccount("passphrase")

// console.log(req.body.Fullname);
// console.log(req.body.Aadharnumber);
// console.log(req.body.EmailId);
// console.log(req.body.Address);
// console.log(req.body.phonenumber);
// console.log(req.body.LoginId);
// console.log(req.body.Password);
// console.log('haiiihelooo')

// save the order and check for errors    
personreg.save(function (err) {
    // if (err)
    // res.json(err);
    res.json({
    message: 'New order created!',
    data: personreg
    });
    });
}
    };