const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

//create relationships between data

// Users can have many posts and many comments.
User.hasMany(Post, { foreignKey: "post_author" });
User.hasMany(Comment, { foreignKey: "comment_author" });

// Posts belong to users and can have many comments.
Post.belongsTo(User, { foreignKey: "post_author" });
Post.hasMany(Comment, { foreignKey: "comment_parent_post" });

// Comments belong to Users & Posts
Comment.belongsTo(User, { foreignKey: "comment_author" });
Comment.belongsTo(Post, { foreignKey: "comment_parent_post" });

module.exports = { User, Post, Comment };
