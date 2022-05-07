const { Difficulty } = require('../models');

const dataArray = [{ name: 'Easy' }, { name: 'Medium' }, { name: 'Hard' }];

const seedDifficulties = () => Difficulty.bulkCreate(dataArray);

module.exports = seedDifficulties;
