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

//Returns data for a particular post with comments
// --- /api/posts/:post_id
router.get("/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [User, Comment],
    });

    const { comments, user, post_title, post_text, post_author, post_id } =
      postData;

    // This set of code creates two arrays: one for each comment and another for each comment author
    const commentArray = comments.map((data) => data.get({ plain: true }));
    const commentAuthorIds = commentArray.map(function (el) {
      return el.comment_author;
    });

    let commentAuthorNames = [];
    for (let i = 0; i < commentAuthorIds.length; i++) {
      let thisAuthor = await User.findOne({
        where: { id: commentAuthorIds[i] },
      });
      let { username } = thisAuthor;
      commentAuthorNames.push(username);
    }

    console.log(commentAuthorNames);

    //combine the array of authors and reviews into a new array of objects to pass through to the handlebars and render in correct order with #each method
    const commentData = commentAuthorNames.map(function (value, index) {
      return { author: value, text: commentArray[index].comment_text };
    });

    // console.log(commentData);

    const postName = await User.findOne({ where: { id: post_author } });
    const postAuthor = postName.username;

    if (!postName) {
      res.status(404).json({ message: "No post with this id!" });
      return;
    }

    // res.status(200).json(postData);
    res.render("commentview", {
      post_title,
      post_text,
      postAuthor,
      user,
      commentData,
      post_id,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
