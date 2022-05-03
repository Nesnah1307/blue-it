const { Star } = require('../models');

function generateStar() {
  const dataArray = [];
  for (let i = 0; i < 200; i++) {
    dataArray.push({
      post_id: Math.floor(Math.random() * 50 + 1),
      user_id: Math.floor(Math.random() * 20 + 1),
    });
  }
  return dataArray;
}

const seedStars = () => Star.bulkCreate(generateStar(), { individualHooks: true });

module.exports = seedStars;
