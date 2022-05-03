const { Comment } = require('../models');
const { faker } = require('@faker-js/faker');

function generateData() {
  let dataArray = [];
  for (let i = 0; i < 50; i++) {
    dataArray.push({
      content: faker.lorem.sentence(),
      user_id: Math.floor(Math.random() * 20 + 1),
      post_id: Math.floor(Math.random() * 50 + 1),
    });
  }
  return dataArray;
}

const seedComments = () => Comment.bulkCreate(generateData(), { individualHooks: true });

module.exports = seedComments;
