const { Comment } = require("../models");

const commentData = [{}, {}, {}, {}, {}];

const seedComment = () => Category.bulkCreate(commentData);

module.exports = seedComment;
