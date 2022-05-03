const seedBlueUsers = require('./user-seeds');
const seedBlueComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAllBlueIt = async () => {
    await sequelize.sync({ force: true });
    console.log('_____________');
    await seedBlueUsers();
    console.log('_____________');
    await seedBlueComments();
    console.log('_____________');

    process.exit(0);
};

seedAllBlueIt();