const router = require("express").Router();
const { Post, User, Comment } = require("../../models");

// --- /api/posts/home
router.get("/home", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User, Comment],
    });
    res.status(200).json(postData);
  } catch {
    res.status(500).json(err);
  }
});

// --- /api/posts/:post_id
router.get("/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [User, Comment],
    });

    if (!postData) {
      res.status(404).json({ message: "No post with this id!" });
      return;
    }

    res.status(200).json(postData);
  } catch {
    res.status(500).json(err);
  }
});

module.exports = router;
