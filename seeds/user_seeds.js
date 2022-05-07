const { User } = require('../models');
const { faker } = require('@faker-js/faker');

function generateData() {
  let dataArray = [];
  for (let i = 0; i < 30; i++) {
    dataArray.push(
      JSON.stringify({
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: '1234',
        membership: Math.floor(Math.random() * 2),
        avatar: faker.image.avatar(),
      })
    );
  }
  return [...new Set(dataArray)].map(el => JSON.parse(el));
}

const seedUsers = () => User.bulkCreate(generateData(), { individualHooks: true });

module.exports = seedUsers;
