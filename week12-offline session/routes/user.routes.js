const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// User Routes
router.get('/', userController.getAllUsers);
router.post('/', userController.addUser);
router.patch('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
