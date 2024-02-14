const { Menu, User } = require('../../models');

const router = require('express').Router();

const serialize = (data) => JSON.parse(JSON.stringify(data));

// route to get all dishes
router.get('/', async (req, res) => {
  const menuData = await Menu.findAll().catch((err) => { 
      res.json(err);
    });
     const menuItems = menuData.map((menuItem) => menuItem.get({ plain: true }));
     res.render('index', { menuItems });

//res.json(menuData);

    });

router.post('/', async (req, res) => {
    
    Menu.create(req.body).then((menuItem)=>res.json(menuItem))

});

router.post('/select', async (req, res) => {
    try {
        const user = await User.findByPk(req.session.userId, { include: [Menu]});
        const { menus } = serialize(user);
        if (!menus.map(o => String(o.id)).includes(req.body.id)) {
            await user.addMenu(req.body.id);
        }
        await user.save();
        res.redirect('/');
    } catch (err) {
        console.log(err);
        res.sendStatus(500).end();
    }

});


module.exports = router;

