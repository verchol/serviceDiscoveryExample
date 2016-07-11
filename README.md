###  Example of how to detect external IP in container ran by Codefresh

When you run your docker container or composition through Codefresh UI or API sometimes you need to know what is external IP of the containers , so you can access it through web.

Do make this use case possible any time we run container we inject a file that provide full decscription of your ip and services that were ran through composition.
**The format is following** :

`codefresh_app_410ud7ywb_8080=http://192.168.99.100:32786
codefresh_app_410ud7ywb_9000=http://192.168.99.100:22351
codefresh_ms_4jozej0jx_3000=http://192.168.99.100:27017
default=codefresh_app_410ud7ywb_8080
self=codefresh_app_410ud7ywb`
