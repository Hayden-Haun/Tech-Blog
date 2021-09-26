const { Comment } = require("../models");

const commentData = [
  {
    comment_parent_post: 1,
    comment_author: 2,
    comment_text: "I also love using the dark mode!",
  },
  {
    comment_parent_post: 1,
    comment_author: 3,
    comment_text: "My favorite theme is called Noctis Minimus",
  },
  {
    comment_parent_post: 2,
    comment_author: 4,
    comment_text:
      "I thought Secquelize was pretty hard to understand at first, but after I built a few applications with it, I realized how great the intuitive modularization is.",
  },
  {
    comment_parent_post: 3,
    comment_author: 4,
    comment_text:
      "Don't use Handlebars! There are much better frameworks out there.... take a loot into React",
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
