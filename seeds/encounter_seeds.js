const { Encounter } = require('../models');
const generateData = () => {
  let dataArray = [];
  for (let i = 0; i < 200; i++) {
    dataArray.push(
      JSON.stringify({
        user_id: Math.floor(Math.random() * 30 + 1),
        post_id: Math.floor(Math.random() * 100 + 1),
      })
    );
  }
  return [...new Set(dataArray)].map(el => JSON.parse(el));
};

console.log(generateData());

const seedEncounters = () => Encounter.bulkCreate(generateData(), { individualHooks: true });

module.exports = seedEncounters;
