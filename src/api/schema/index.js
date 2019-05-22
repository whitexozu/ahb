const Router = require('koa-router');
const schemaCtrl = require('./schema.ctrl');

const schema = new Router();


schema.get('/getschemalist/:connectionName', schemaCtrl.getschemalist);
schema.post('/getschema', schemaCtrl.getschema);
schema.get('/collectschema/:connectionName', schemaCtrl.collectschema);
schema.post('/getscolumnlist', schemaCtrl.getscolumnlist);

// schema.patch('/update/:id', connectionCtrl.update);
// schema.delete('/delete/:id', connectionCtrl.delete);


module.exports = schema;
