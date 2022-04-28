const seedBlueUsers = require('./user_seeds');

const sequelize = require('../config/connection');

const seedAllBlueIt = async () => {
    await sequelize.sync({ force: true });
    console.log('_____________');
    await seedBlueUsers();
    console.log('_____________');

    process.exit(0);
};

seedAllBlueIt();