const { Post } = require('../models');
const { faker } = require('@faker-js/faker');

function generateUser() {
  let UsersData = [];
  for (let i = 0; i < 50; i++) {
    UsersData.push({
      title: faker.lorem.sentence(),
      answer: faker.lorem.paragraph(),
      type_id: Math.floor(Math.random() * 4 + 1),
      language_id: Math.floor(Math.random() * 10 + 1),
      difficulty_id: Math.floor(Math.random() * 3 + 1),
      creator_id: Math.floor(Math.random() * 50 + 1),
    });
  }
  return UsersData;
}

const seedUsers = () => Post.bulkCreate(generateUser(), { individualHooks: true });

module.exports = seedUsers;
