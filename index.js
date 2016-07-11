var serviceDiscover = require('serviceDiscovery');
serviceDiscover.watch(process.env.FILE_TO_WATCH, (err, data)=>{
  if (err){
   console.log('failed')
   return;
}
 console.log('model is : ' + JSON.stringify(serviceDiscover.model()));

 //serviceDiscover.unwatch();
 require('./bin/www');
});
