const express = require('express');
const { router } = require('../app');
const Router = express.Router();
//const models = require('../models/userModel');
const userController = require('../controller/userController');

// All user retrive
Router.get('/', userController.findAll);

// Sinle user
Router.get('/:id', userController.findById);

// Create User
Router.post('/', userController.create);

// Update user
Router.put('/:id', userController.update);

// Delete single User
Router.delete('/:id', userController.delete);

module.exports = Router;