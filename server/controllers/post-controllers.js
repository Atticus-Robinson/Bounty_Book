const { Post } = require("../models/Post");

const postController = {
  //Get all posts
  getAllPost(req, res) {
    Post.find({});
  },

  //Get one post by ID
  getPostById({ params }, res) {
    Post.findOne({ _id: params.id });
  },

  //Create Post
  createPost({ body }, res) {
    Post.create(body)
      .then((dbPostData) => res.json(dbPostData))
      .catch((err) => res.status(400).json(err));
  },

  //Update Post by ID
  updatePost({ params, body }, res) {
    Post.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbPostData) => {
        if (!dbPostData) {
          res.status(404).json({ message: "No post found with this id..." });
          return;
        }
        res.json(dbPostData);
      })
      .catch((err) => res.status(400).json(err));
  },

  //Delete Post
  deletePost({ params }, res) {
    Post.findOneAndDelete({ _id: params.id })
      .then((dbPostData) => {
        if (!dbPostData) {
          res.status(404).json({ message: "No post found with this id..." });
          return;
        }
        res.json(dbPostData);
      })
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = postController;
