const Menu = require('../../models/Menu');

const router = require('express').Router();

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
        console.log('SELECTED ITEM ID', req.body.id);
        // Figure out how to attribute selected item to user
        res.redirect('/');
    } catch (err) {
        console.log(err);
        res.sendStatus(500).end();
    }

});


module.exports = router;

