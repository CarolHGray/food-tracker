const router = require('express').Router();
const { User, Menu } = require('../models');
const withAuth = require('../utils/auth');

const serialize = (data) => JSON.parse(JSON.stringify(data));

router.get('/', withAuth, async (req, res) => {
  try {
    
    const userData = await User.findByPk(req.session.userId,{
      include: [Menu],
    });

    const menuData = await Menu.findAll({});

    const menuItems = serialize(menuData);
    const selectedMenuItems = serialize(await userData.getMenus());

    const users = serialize(userData);

    res.render('dashboard', {
      users,
      menuItems,
      selectedMenuItems,
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

router.get('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.redirect('/login');
    });
  } else {
    res.redirect('/login');
  }
});

module.exports = router;
