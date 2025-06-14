const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');

// Post Routes
router.get('/', postController.getAllPosts);
router.post('/', postController.createPost);

module.exports = router;
