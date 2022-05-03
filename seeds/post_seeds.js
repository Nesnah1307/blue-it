const { Post } = require('../models');
const { faker } = require('@faker-js/faker');

function generateData() {
  let dataArray = [];
  for (let i = 0; i < 100; i++) {
    dataArray.push(
      JSON.stringify({
        title: faker.lorem.sentence(),
        answer: faker.lorem.paragraph(),
        type_id: Math.floor(Math.random() * 4 + 1),
        language_id: Math.floor(Math.random() * 10 + 1),
        difficulty_id: Math.floor(Math.random() * 3 + 1),
        creator_id: Math.floor(Math.random() * 30 + 1),
      })
    );
  }
  return [...new Set(dataArray)].map(el => JSON.parse(el));
}

const seedUsers = () => Post.bulkCreate(generateData(), { individualHooks: true });

module.exports = seedUsers;
