const router = require('express').Router();

const apiRoutes = require('./api');
const authRoutes = require('./auth-routes.js');
const homeRoutes = require('./home-routes.js');
const editRoutes = require('./edit.js')
const adminRoute = require('./adminRoutes.js');

router.use('/api', apiRoutes);
router.use('/', authRoutes);
router.use('/', homeRoutes);
router.use('/edit', editRoutes)
router.use('/create-admin', adminRoute)



module.exports = router;