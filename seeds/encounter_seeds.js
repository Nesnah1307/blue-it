const { Encounter } = require('../models');
const generateData = () => {
  let dataArray = [];
  for (let i = 0; i < 50; i++) {
    dataArray.push({
      user_id: Math.floor(Math.random() * 20 + 1),
      post_id: Math.floor(Math.random() * 50 + 1),
    });
  }
  return dataArray;
};

const seedEncounters = () => Encounter.bulkCreate(generateData(), { individualHooks: true });

module.exports = seedEncounters;
