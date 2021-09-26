const { Post } = require("../models");

const postData = [{}, {}, {}, {}, {}];

const seedPost = () => Category.bulkCreate(postData);

module.exports = seedPost;
