const router = require('express').Router();

const apiRoutes = require('./api');
const authRoutes = require('./auth.js');
const homeRoutes = require('./home-routes.js');

router.use('/api', apiRoutes);
router.use('/auth', authRoutes);
router.use('/', homeRoutes);

module.exports = router;