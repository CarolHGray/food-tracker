const router = require('express').Router();
const { User } = require('../../models');
router.get('/login', async (req, res) => {
    console.log("hello")
});
router.post('/login', async (req, res) => {
    console.log("hello")
});

router.post('/logout', (req, res) => {
});

module.exports = router;
