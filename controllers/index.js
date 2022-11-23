const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');
const dashRoutes = require('./dashRoutes.js');

const handlebars = [
  homeRoutes,
  dashRoutes,
]
router.use('/', handlebars);
router.use('/api', apiRoutes);



router.use((req, res) => {
  res.send("<h1>The webpage cannot be found!</h1>")
    res.status(404).end();
  });
  
  module.exports = router;
