const seedUser = require("./seedUser");
const seedPost = require("./product-seeds");
const seedComment = require("./tag-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedUser();
  console.log("\n----- Users SEEDED -----\n");

  await seedPost();
  console.log("\n----- Posts SEEDED -----\n");

  await seedComment();
  console.log("\n----- Comments SEEDED -----\n");

  process.exit(0);
};

seedAll();
