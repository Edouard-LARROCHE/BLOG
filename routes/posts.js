const express = require('express');
const router = express();
const { getPosts, getSinglePost, createPost, updatePost, deletePost } = require('../controllers/posts');

router.get('/', getPosts);
router.get('/:id', getSinglePost);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router;
