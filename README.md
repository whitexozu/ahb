# test
$ npm install -g request

$ node
> var request = require("request");
> request("http://localhost:4000/api/echo/fail", function(err, res, body) { console.log(body); });

> var options = {uri:'http://localhost:4000/api/echo/', method: 'POST', body: { id: 0, type: 'vertex' }, json: true}
> request.post(options, function(err, res ,body){ console.log(body); })
