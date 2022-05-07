const { Star } = require('../models');

function generateStar() {
  const dataArray = [];
  for (let i = 0; i < 200; i++) {
    dataArray.push(
      JSON.stringify({
        post_id: Math.floor(Math.random() * 100 + 1),
        user_id: Math.floor(Math.random() * 30 + 1),
      })
    );
  }
  return [...new Set(dataArray)].map(el => JSON.parse(el));
}

const seedStars = () => Star.bulkCreate(generateStar(), { individualHooks: true });

module.exports = seedStars;
