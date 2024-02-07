const sequelize = require('../config/connection');
const {User,Menu } = require('../models');

const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Menu.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};

seedDatabase();