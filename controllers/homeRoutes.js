const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

// homepage will display all routes if user is logged in
router.get("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User, Comment],
    });

    const posts = postData.map((project) => project.get({ plain: true }));
    console.log(posts);

    res.render("postpage", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//  --- LOGIN Route - localhost/login
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

//  --- CREATE Route ---
router.get("/create", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("create");
});

// --- Create post route to render the input form page

router.get("/createPost", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/createpost");
    return;
  }

  res.render("login");
});

module.exports = router;

// HOME ROUTE - localhost3001/
// OG HOME ROUTE to GET ALL USER DATA .....
// router.get("/", withAuth, async (req, res) => {
//   try {
//     const userData = await User.findAll({
//       attributes: { exclude: ["password"] },
//       order: [["username", "ASC"]],
//     });

//     const users = userData.map((project) => project.get({ plain: true }));

//     res.render("homepage", {
//       users,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
//  .......
