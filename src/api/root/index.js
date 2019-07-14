const Router = require('koa-router');
const rootCtrl = require('./root.ctrl');

const root = new Router();


root.get('/GetConnectionList', rootCtrl.GetConnectionList);
root.post('/GetSchemaList', rootCtrl.GetSchemaList);
root.post('/AddSchema', rootCtrl.AddSchema);
root.post('/GetSchema', rootCtrl.GetSchema);
root.post('/CollectSchema', rootCtrl.CollectSchema);


module.exports = root;
