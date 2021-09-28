const router = require("express").Router();
const { POINT_CONVERSION_HYBRID } = require("constants");
const { Post, User, Comment } = require("../../models");
const { route } = require("./postRoutes");

//POST NEW COMMENT ROUTE
// --- /api/comments/new
router.post("/new", async (req, res) => {
  try {
    const newComment = await Comment.create({
      comment_parent_post: req.body.comment_parent_post,
      comment_author: req.session.user_id,
      comment_text: req.body.comment_text,
    });

    console.log(newComment);
    res.status(200).json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
