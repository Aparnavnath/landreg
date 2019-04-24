//import order module

Personreg = require('../personreg/personregModel');
// Handle index actions

exports.index = function (req, res) {
    Personreg.get(function (err, login) {
        if (err) {
            res.json({
            status: "error",
            message: err,
            });
        }
        res.json({
            status: "success",
            message: "Orders retrieved successfully",
            data: login
        });
    });
};
exports.verify = function (req, res) {
    const EmailId = req.body.EmailId;
    const  Password = req.body. Password;
    console.log(req.body)
    // console.log(errors);

    // Login.findOne({Email})
    // .then(reponse  => {
    //     if(!login) {
    //         errors.Email = 'User not found';
    //         return res.status(404).json(errors);
    //     }
    //     else {
    //         errors.Password = 'Incorrect Password';
    //         return res.status(400).json(errors);

    //     }
    // });   
    
    Personreg.findOne({ EmailId:EmailId ,  Password:  Password} , function(err, EmailId ) {
        console.log(err,EmailId);
        if(err) {
            
           //handle error here
           return res.send(err);

        }
     
        //if a user was found, that means the user's email matches the entered email
        if (EmailId) {
            return res.json({
                success: true,
                user:EmailId
            });
        } else {
            //code if no user with entered email was found
            return res.json({ success: false, error: err });
                
        }
        
    //  Personreg.findOne({password: password }, function(err,password) {
    //     if(err) {
    //        //handle error here
    //        return res.send(err);
    //     }
     
    //     //if a user was found, that means the user's email matches the entered email
    //     if (password) {
    //         return res.json({
    //             success: true
    //         });
    //     } else {
    //         //code if no user with entered email was found
    //         return res.json({ success: false, error: err });
                
    //     }
        
    //  });
    }); 

    
    // // save the order and check for errors
    // login.save(function (err) {
     // // if (err)
        // // res.json(err);
        //     res.json({
        //         message: 'New order created!',
        //         data: login
        //     });
        // });
    
};


