const router = require('express').Router();
const menuRoutes = require('./menuRoutes');
const userRoutes = require('./userRoutes');

router.use('/menu', menuRoutes);
router.use('/users', userRoutes);
module.exports = router;
