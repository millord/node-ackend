const router = require("express").Router();
const Post = require("../models/Post");

// GET ALL THE POST
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// CREATE A POST
router.post("/", async (req, res) => {
  try {
    const postSaved = await new Post({
      title: req.body.title,
      description: req.body.description
    });
    postSaved.save();
    res.json(postSaved);
  } catch (err) {
    res.json({ message: err });
  }
});

// GET A SPECIFIC POST
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById({ _id: req.params.postId });
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

/// DELETE A POST
router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// UPDATE
router.patch("/:postId", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title, description: req.body.description } }
    );
    res.json(updatedPost);
  } catch (err) {}
  res.json({ message: err });
});

module.exports = router;
