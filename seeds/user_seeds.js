const { User } = require('../models');
const { faker } = require('@faker-js/faker');

function generateData() {
  let dataArray = [];
  for (let i = 0; i < 50; i++) {
    dataArray.push({
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: '1234',
      membership: Math.floor(Math.random() * 2),
    });
  }
  return dataArray;
}

const seedUsers = () => User.bulkCreate(generateData(), { individualHooks: true });

module.exports = seedUsers;
