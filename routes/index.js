var express = require('express');
var router = express.Router();
var serviceDiscovery = require('serviceDiscovery');
/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });
});

router.get('/ls', function(req, res, next) {
   var shelljs = require('shelljs');
   var files = "";

   shelljs.ls('/opt/codefresh/container-map').forEach(function(file) {
     files = files + "\n" + file;
   });
  return res.send (files);

});

router.get('/cat', function(req, res, next) {
   var shelljs = require('shelljs');
   var output = shelljs.cat('/opt/codefresh/container-map')
  return res.send (output);

});

router.get('/whoami', function(req, res, next) {
  console.log('/whoami');
  console.log(JSON.stringify(serviceDiscovery.model()));
  return res.send(JSON.stringify(serviceDiscovery.model()));
});
module.exports = router;
