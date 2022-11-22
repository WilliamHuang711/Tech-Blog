const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');

const handleBars = [homeRoutes, dashboardRoutes];

router.use('/', handleBars);
router.use('/api', apiRoutes);


router.use((req, res) => {
  res.send("<h1>The webpage cannot be found!</h1>")
    res.status(404).end();
  });
  
  module.exports = router;
