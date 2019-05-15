const Router = require('koa-router');
const echoCtrl = require('./echo.ctrl');

const echo = new Router();


echo.get('/', echoCtrl.dump);
echo.get('/success', echoCtrl.success);
echo.get('/fail', echoCtrl.fail);
echo.post('/', echoCtrl.echo);

module.exports = echo;
