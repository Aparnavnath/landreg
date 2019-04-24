// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to land',
    });
});


var registrController = require('./registr/registrController');
var loginController = require('./login/loginController');
var buyerController = require('./buyer/buyerController');
var govrController = require('./govr/govrController');
var sellController = require('./sell/sellController');
var personregController = require('./personreg/personregController');
var taxController = require('./tax/taxController');
var loanController = require('./loan/loanController');

// order routes
router.route('/login')
.get(loginController.index)
.post(loginController.verify);

router.route('/registr')
    .get(registrController.index)
    .post(registrController.new);
// Export API routes
// order routes
// Export API routes
// order routes
router.route('/buyer')
    .get(buyerController.index)
    .post(buyerController.new);
// Export API routes
// order routes
router.route('/govr')
    .get(govrController.index)
    .post(govrController.new);
// Export API routes
// order routes
router.route('/sell')
    .get(sellController.index)
    .post(sellController.new);
// Export API routes
// order routes
router.route('/personreg')
    .get(personregController.index)
    .post(personregController.new);
// Export API routes
   // order routes
router.route('/tax')
.get(taxController.index)
.post(taxController.new);
// Export API routes
router.route('/loan')
.get(loanController.index)
.post(loanController.new);
// Export API routes
         
module.exports = router;

