const connection = require('../config/connection');

const User = function(user) {
    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.email = user.email;
    this.phoneno - user.phoneno;
    this.status = user.status;
};

// Create User
User.create = function( newUser, result ) {

connection.query("INSERT INTO user set ?", newUser, function (err, res) {
    if(err) {
        console.log("error: ", err);
        result(err, null);
    }
    else {
        console.log(res.insertId);
        result(null, res.insertId);
    }
});    
};

// Find User by id
User.findById = function (id, result) {

connection.query("select * from user where id = ?", id, function(err, res) {
    if(err) {
        console.log("error: ", err);
        result(err, null);
    }
    else {
        result(null, res);
    }
});    
};

// Find all users
User.findAll = function (result) {
    
connection.query("Select * from user", function (err, res) {
    if(err) {
        console.log("error: ", err);
        result(null, err);
    }
    else {
        console.log('user: ', res);
        result(null, res);
    }
});
};

// To update user
User.update = function(id, user, result) {

connection.query("UPDATE user SET firstname=?,lastname=?,email=?,phoneno=?,status=? WHERE id = ?", 
[user.firstname,user.lastname,user.email,user.phoneno,user.status], 
function (err, res) {
  if(err) {
    console.log("error: ", err);
    result(null, err);
  }  
  else {
    result(null, res);
  }
});
};

// Delete User 
User.delete = function(id, result) {

connection.query("DELETE FROM user WHERE id = ?", [id], function(err, res) {
    if(err) {
        console.log("error: ",err);
        result(null, err);
    }
    else {
        result(null, res);
    }
});    
};

module.exports = User;