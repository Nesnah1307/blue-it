const e = require('express');
const { Language } = require('../models');

const dataArray = ['HTML', 'CSS', 'Javascript', 'Typescript', 'C++', 'C#', 'Java', 'Golang', 'Python', 'Other'].map(
  el =>
    new Object({
      name: el,
    })
);

console.log(dataArray);

const seedLanguages = () => Language.bulkCreate(dataArray, { individualHooks: true });

module.exports = seedLanguages;
