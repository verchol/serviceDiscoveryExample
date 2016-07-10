var serviceDiscover = require('serviceDiscovery');
serviceDiscover.watch((err, data)=>{
  if (err){
   console.log('failed')
   return;
 }
 console.log('data:' + data);
 serviceDiscover.unwatch();
})
