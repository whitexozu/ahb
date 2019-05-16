# test
$ npm install -g request

$ node
> var request = require("request");

> request("http://localhost:4000/api/echo/fail", function(err, res, body) { console.log(body); });

> var options = {uri:'http://localhost:4000/api/echo/', method: 'POST', body: { id: 0, type: 'vertex' }, json: true}
> request.post(options, function(err, res ,body){ console.log(body); })

> request("http://localhost:4000/api/connection/list", function(err, res, body) { console.log(body); });

> request("http://localhost:4000/api/connection/detail/1", function(err, res, body) { console.log(body); });

> var options = {uri:'http://localhost:4000/api/connection/save', method: 'POST', body: { id: 0 }, json: true}
> request.post(options, function(err, res ,body){ console.log(body); })

> var options = {uri:'http://localhost:4000/api/connection/update/1', method: 'PATCH', body: { id: 0 }, json: true}
> request.patch(options, function(err, res ,body){ console.log(body); })

> var options = {uri:'http://localhost:4000/api/connection/delete/1', method: 'DELETE', body: { id: 0 }, json: true}
> request.del(options, function(err, res ,body){ console.log(body); })



