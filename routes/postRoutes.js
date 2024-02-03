const express = require('express');
const router = express.Router();
const PostController = require('../controllers/postControllers');

// get all posts
router.get('/', PostController.getAllPosts);

// get a post by id
router.get('/:id', PostController.getPostById);

// create a new post
router.post('/', PostController.createPost);

// update a post by id
router.put('/:id', PostController.updatePostById);

// delete a post by id
router.delete('/:id', PostController.deletePostById);

exports.modules = router;