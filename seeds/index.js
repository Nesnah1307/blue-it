const seedUsers = require('./user_seeds');
const seedPosts = require('./post_seeds');
const seedDifficulties = require('./difficulty_seeds');
const seedEncounters = require('./encounter_seeds');
const seedLanguages = require('./language_seeds');
const seedStars = require('./star_seeds');
const seedTypes = require('./type_seeds');
const sequelize = require('../config/connection');
const seedComments = require('./comment_seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('_____________');
  await seedDifficulties();
  console.log('_____________');
  await seedLanguages();
  console.log('_____________');
  await seedTypes();
  console.log('_____________');
  await seedUsers();
  console.log('_____________');
  await seedPosts();
  console.log('_____________');
  await seedEncounters();
  console.log('_____________');
  await seedStars();
  console.log('_____________');
  await seedComments();
  process.exit(0);
};

seedAll();
