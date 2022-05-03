const { Type } = require('../models');

const dataArray = ['Interview', 'Algorithm', 'Work', 'Other'].map(el => new Object({ name: el }));

const seedTypes = () => Type.bulkCreate(dataArray, { individualHooks: true });

module.exports = seedTypes;
