const { User } = require("../models");

const userData = [
  {
    username: "smartGuy25",
    email: "smartGuy25@gmail.com",
    password: "password123",
  },
  {
    username: "Wonky-Llama",
    email: "wonky-llama@gmail.com",
    password: "password123",
  },
  {
    username: "cats_rule_dude",
    email: "catsrule@comcast.net",
    password: "password123",
  },
  {
    username: "wizzzard",
    email: "wizzzard@gmail.com",
    password: "password123",
  },
  {
    username: "smartiePants",
    email: "smartiePants@comcast.com",
    password: "password123",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
