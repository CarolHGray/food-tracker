const router = require('express').Router();
const { User } = require('../../models');

router.post('/login', async (req, res) => {
    User.create(req.body)
});

router.post('/logout', (req, res) => {
});

module.exports = router;
