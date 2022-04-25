const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
  {
    title: String,
    subtitle: String,
    author: String,
    content: String,
    tag: String,
    image: String,
  },
  {
    timestamps: true,
  },
  {
    collection: 'Posts',
  },
);

const Post = mongoose.model('Post', postSchema);

module.exports = { Post };
