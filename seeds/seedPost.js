const { Post } = require("../models");

const postData = [
  {
    post_title: "VS Code Studio",
    post_author: 1,
    post_text:
      "Visual Studio Code is a code editor made by Microsoft for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git. What I like most about Visual Studio Code is its UI. The software is laid out beautifully and I love that I can change the theme to dark mode.",
  },
  {
    post_title: "Sequelize ORM",
    post_author: 2,
    post_text:
      "Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more. It's great once you know how to use it... don't expect to always find answers in their documentation.",
  },
  {
    post_title: "Handlebars (Javascript)",
    post_author: 3,
    post_text:
      "Handlebars compiles templates into JavaScript functions. This makes the template execution faster than most other template engines. By design, logic-less templates force you to separate concerns thus helping you avoid future problems with refactoring. It also allow templates to be used with multiple programming languages without changes.",
  },
  {
    post_title: "Playstation 5!!!",
    post_author: 4,
    post_text:
      "Another great release from Sony. Whether you're an Xbox person or a Playstation person, you'll truly enjoy the PS5.",
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
