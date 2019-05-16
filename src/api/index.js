const Router = require('koa-router');
const connection = require('./connection');
const echo = require('./echo');

const api = new Router();

api.use('/connection', connection.routes());
api.use('/echo', echo.routes());

// 라우터를 내보냅니다.
module.exports = api;