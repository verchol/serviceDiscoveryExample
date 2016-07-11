var express = require('express');
var router = express.Router();
var serviceDiscovery = require('serviceDiscovery');
/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });
});

router.get('/whoami', function(req, res, next) {
  console.log('/whoami');
  console.log(JSON.stringify(serviceDiscovery.model()));
  return res.send(JSON.stringify(serviceDiscovery.model()));
});
module.exports = router;
