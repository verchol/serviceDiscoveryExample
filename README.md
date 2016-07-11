###  Example of how to detect external IP in container ran by Codefresh

When you run your docker container or composition through Codefresh UI or API sometimes you need to know what is external IP and more important port mapping  for containers , so you can access it through web.

Do make this use case possible any time we run container we inject a file that provide full decscription of your ip and services that were ran through composition.
**The format is following** :
```
codefresh_app_410ud7ywb_8080=http://192.168.99.100:32786 
codefresh_app_410ud7ywb_9000=http://192.168.99.100:22351
codefresh_ms_4jozej0jx_3000=http://192.168.99.100:27017
default=codefresh_app_410ud7ywb_8080
self=codefresh_app_410ud7ywb

```

Pay attention that self is an entry for current container and entires above enables to see both external ip and port mapping.

The problem is that update of this information is asyncronic so process inside the container will be executed prior to update of mapping information.

We created a nodejs module as example of how you can override this problem.

## What you need to do :
 Run 
 '''
 npm install serviceDiscovery
 '''
 
 Then create index.js file that will run first wait of information be updated and then run execute your starting script
 '''
 var serviceDiscover = require('serviceDiscovery');
 
 serviceDiscovery.watch(process.env.FILE_TO_WATCH, (err, data)=>{
 //no need to define FILE_TO_WATCH env variable by default it /opt/codefresh/container-map
  if (err){
   console.log('failed')
   return;
}
 console.log('service discovery file detected!');
 console.log('model is : ' + JSON.stringify(serviceDiscover.model()));
 
 require('./bin/www');  //once serviceDiscovery detects this information it runs a starting script.
 
'''

# How to use this information in your nodejs app

serviceDiscovery is singelton so you can require it in any module and just call for serviceDiscover.model() that will include array of 
internal port : {external ip} : {external port}
{"3000":"http://codefresh-inc-8.cf-cd.com:32799"}

## In example i added several ip that you can use for testing purposes 
** /whoami ** will return a model (see above)
** /cat ** will show contect of /opt/codefresh/container-map


 
