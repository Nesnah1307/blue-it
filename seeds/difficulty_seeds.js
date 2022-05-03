const { Difficulty } = require('../models');

const dataArray = [{ name: 'Easy' }, { name: 'Medium' }, { name: 'Hard' }];

const seedDifficulties = () => Difficulty.bulkCreate(dataArray, { individualHooks: true });

module.exports = seedDifficulties;
