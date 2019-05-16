const Router = require('koa-router');
const connectionCtrl = require('./connection.ctrl');

const connection = new Router();


connection.get('/list', connectionCtrl.list);
connection.get('/detail/:id', connectionCtrl.detail);
connection.post('/save', connectionCtrl.save);
connection.patch('/update/:id', connectionCtrl.update);
connection.delete('/delete/:id', connectionCtrl.delete);


module.exports = connection;
