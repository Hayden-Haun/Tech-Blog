const { getMaxListeners, mainModule } = require("process");
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
    username: "smartGuy25",
    email: "smartGuy25@gmail.com",
    password: "password123",
  },
  {
    username: "smartGuy25",
    email: "smartGuy25@gmail.com",
    password: "password123",
  },
  {
    username: "smartGuy25",
    email: "smartGuy25@gmail.com",
    password: "password123",
  },
];

const seedUser = () => Category.bulkCreate(userData);

module.exports = seedUser;
