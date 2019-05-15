const Router = require('koa-router');
const echo = require('./echo');

const api = new Router();

api.use('/echo', echo.routes());

// 라우터를 내보냅니다.
module.exports = api;
