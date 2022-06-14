const { PostModel } = require('../models/posts');
const { UserModel } = require('../models/user');
const ObjectID = require('mongoose').Types.ObjectId;

const createPost = async (req, res) => {
  const newPost = new PostModel({
    posterId: req.body.posterId,
    title: req.body.title,
    subtitle: req.body.subtitle,
    content: req.body.content,
    likers: [],
    comments: [],
  });

  try {
    const post = await newPost.save();
    return res.status(201).json(post);
  } catch (err) {
    return res.status(400).send(err);
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const getSinglePost = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const post = await PostModel.findById(_id);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  try {
    const updatedPost = await PostModel.findByIdAndUpdate(_id, post, { new: true });
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

const deletePost = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const deletedPost = await PostModel.findByIdAndRemove(_id);
    res.status(200).json(deletedPost);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

const likePost = async (req, res) => {
  if (!ObjectID.isValid(req.params.id)) return res.status(400).send('ID unknown : ' + req.params.id);

  try {
    await PostModel.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: { likers: req.body.id },
      },
      { new: true },
    )
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err }));

    await UserModel.findByIdAndUpdate(
      req.body.id,
      {
        $addToSet: { likes: req.params.id },
      },
      { new: true },
    )
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    return res.status(400).send(err);
  }
};

const unlikePost = async (req, res) => {
  if (!ObjectID.isValid(req.params.id)) return res.status(400).send('ID unknown : ' + req.params.id);

  try {
    await PostModel.findByIdAndUpdate(
      req.params.id,
      {
        $pull: { likers: req.body.id },
      },
      { new: true },
    )
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err }));

    await UserModel.findByIdAndUpdate(
      req.body.id,
      {
        $pull: { likes: req.params.id },
      },
      { new: true },
    )
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports = { createPost, getPosts, getSinglePost, updatePost, deletePost, likePost, unlikePost };
