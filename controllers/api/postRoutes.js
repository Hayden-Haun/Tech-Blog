const router = require("express").Router();
const { Post, User, Comment } = require("../../models");

// --- /api/posts/home
router.get("/home", async (req, res) => {
  try {
    const postData = await Post.findAll({ include: [User] });
    res.status(200).json(postData);
  } catch {
    res.status(500).json(err);
  }
});

module.exports = router;
