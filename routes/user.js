const express = require('express');
const router = express();
const { createUser, getSingleUser, getAllUsers, userInfo, updateUser, deleteUser, follow, unfollow } = require('../controllers/user');

router.post('/', createUser);
router.get('/:id', getSingleUser);
router.get('/', getAllUsers);
router.get('/:id', userInfo);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.patch('/follow/:id', follow);
router.patch('/unfollow/:id', unfollow);

module.exports = router;
