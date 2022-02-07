const router = require('express').Router();

const apiRoutes = require('./api');
const authRoutes = require('./auth.js');
const userRoutes = require('./user.js');

router.use('/api', apiRoutes);
router.use('/auth', authRoutes);
router.use('/', userRoutes);

module.exports = router;