const { Type } = require('../models');

const dataArray = ['Interview', 'Work', 'Homework', 'Other'].map(el => new Object({ name: el }));

const seedTypes = () => Type.bulkCreate(dataArray);

module.exports = seedTypes;
