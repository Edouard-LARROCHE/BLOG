const express = require('express');
const router = express();
const { getPosts, getSinglePost, createPost, updatePost, deletePost, likePost, unlikePost } = require('../controllers/posts');

router.get('/', getPosts);
router.get('/:id', getSinglePost);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/like-post/:id', likePost);
router.patch('/unlike-post/:id', unlikePost);

module.exports = router;
