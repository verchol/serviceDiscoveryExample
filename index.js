var serviceDiscover = require('serviceDiscovery');
serviceDiscover.watch("./tmp/container-map",(err, data)=>{
  if (err){
   console.log('failed')
   return;
}
 console.log('model is : ' + JSON.stringify(serviceDiscover.model()));

 //serviceDiscover.unwatch();
 require('./bin/www');
});
