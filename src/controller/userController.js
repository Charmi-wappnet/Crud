'use strict';

const User = require('../models/userModel');

// Find all user...
exports.findAll = function(req, res) {
User.findAll(function(err, user) {
    console.log('controller')
    if(err)
    res.send(err);
    console.log('res', user);
    res.send(user);
});    
};

// Create User...
exports.create = function(req, res) {
const new_user = new user(req.body);

    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.status(400).send({ error:true, message: "It's mandatory to fill all field"});
    } 
    else {
    User.create(new_user, function(err, user) {
        if (err)
        res.send(err);
        res.json({error:false,message:"user added successfully!",data:user});
      });
   }
 };

    exports.findById = function(req, res) {
    User.findById(req.params.id, function(err,user) {
      if (err)
      res.send(err);
      res.json(user);
    });
};
    
    exports.update = function(req, res) {
        if(req.body.constructor === Object && Object.keys(req.body).length === 0){
          res.status(400).send({ error:true, message: 'Please provide all required field' });
        }else{

    User.update(req.params.id, new User(req.body), function(err, user) {
        if(err)
        res.send(err);
        res.json({ error:false, message: 'User successfully updated' });
   });
}
};

// For delete user
exports.delete  = function(req, res) {
    
User.delete( req.params.id, function(err, user) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'User deleted successfully' });
});
};