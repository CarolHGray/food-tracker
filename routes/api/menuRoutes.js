const Menu = require('../../models/Menu');

const router = require('express').Router();

router.post('/', async (req, res) => {
    
    Menu.create(req.body).then((menuItem)=>res.json(menuItem))

});


module.exports = router;

