const Menu = require('./Menu');
const User = require('./User');


User.belongsToMany(Menu, {
   foreignKey: 'user_id',
   through: {
    unique: false,
    model: 'UserMenu',
   },
});

Menu.belongsToMany(User, {
   foreignKey: 'menu_id',
   through: {
    unique: false,
    model: 'UserMenu',
   },
});

module.exports = { User, Menu };
