const router = require('express').Router();
const { User, Menu } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const menuData = await Menu.findAll({});

    const menuItems = menuData.map(o => o.get({ plain: true }));

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('dashboard', {
      users,
      menuItems,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
