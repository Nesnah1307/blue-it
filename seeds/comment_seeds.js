const { Comment } = require('../models');
const { faker } = require('@faker-js/faker');

function generateData() {
  let dataArray = [];
  for (let i = 0; i < 200; i++) {
    dataArray.push(JSON.stringify({
      content: faker.lorem.sentence(),
      user_id: Math.floor(Math.random() * 30 + 1),
      post_id: Math.floor(Math.random() * 100 + 1),
    }));
  }
  return [...new Set(dataArray)].map(el => JSON.parse(el));
}


const seedComments = () => Comment.bulkCreate(generateData(), { individualHooks: true });

module.exports = seedComments;
