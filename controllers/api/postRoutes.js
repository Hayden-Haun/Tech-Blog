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

// --- /api/posts/new
router.post("/new", async (req, res) => {
  // {
  // post_id: 7
  // post_title: "new technology 1",
  // ---- does not need to be in req.body ---- post_author: 2,
  // post_text: "new text review lalalalala"
  // }
  try {
    // console.log(req.body);

    const newPost = await Post.create({
      post_title: req.body.post_title,
      post_author: req.session.user_id,
      post_text: req.body.post_text,
    });

    console.log(newPost);
    res.status(200).json(newPost);
  } catch (err) {
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
