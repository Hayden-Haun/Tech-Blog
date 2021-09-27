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

    // console.log(postData.comments);

    const { comments, user, post_title, post_text, post_author } = postData;
    // console.log(comments);
    // console.log(user);

    const commentArray = comments.map((data) => data.get({ plain: true }));
    // const { posts } = postData
    // console.log(posts);
    // console.log(commentArray);

    // const commentAuthors = commentArray.map((commentAuthor) => {
    //   console.log(commentAuthor);
    //   commentAuthor.get({ plain: true });
    // });

    // console.log(commentAuthors);

    // console.log(post_title);
    // console.log(post_author);
    // console.log(post_text);

    const postName = await User.findOne({ where: { id: post_author } });
    if (postName === null) {
      console.log("Not found!");
    } else {
      console.log(postName instanceof User); // true
      console.log(postName.username); // 'My Title'
    }
    const postAuthor = postName.username;

    if (!postName) {
      res.status(404).json({ message: "No post with this id!" });
      return;
    }

    // console.log(commentArray);
    res.status(200).json(postData);
    // res.render("commentview", {
    //   post_title,
    //   post_text,
    //   postAuthor,
    //   user,
    //   commentArray,
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
