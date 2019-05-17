const Joi = require('joi');

/*
  GET /api/connection/ilst
*/
exports.list = async (ctx) => {
  console.log('connection list');
  try {
    ctx.body = [
      {
        id: 1,
        ip: '127.0.0.1',
        schema: 'test',
        name: 'aaa',
        password: 'bbb',
        use: true
      },
      {
        id: 2,
        ip: '127.0.0.2',
        schema: 'dump',
        name: 'aaa',
        password: 'bbb',
        use: true
      },
      {
        id: 3,
        ip: '127.0.0.3',
        schema: 'dump',
        name: 'aaa',
        password: 'bbb',
        use: true
      },
      {
        id: 4,
        ip: '127.0.0.4',
        schema: 'dump',
        name: 'aaa',
        password: 'bbb',
        use: true
      },
      {
        id: 5,
        ip: '127.0.0.5',
        schema: 'dump',
        name: 'aaa',
        password: 'bbb',
        use: true
      },
      {
        id: 6,
        ip: '127.0.0.6',
        schema: 'dump',
        name: 'aaa',
        password: 'bbb',
        use: true
      },
      {
        id: 7,
        ip: '127.0.0.7',
        schema: 'dump',
        name: 'aaa',
        password: 'bbb',
        use: true
      },
      {
        id: 8,
        ip: '127.0.0.8',
        schema: 'dump',
        name: 'aaa',
        password: 'bbb',
        use: true
      },
      {
        id: 9,
        ip: '127.0.0.9',
        schema: 'db',
        name: 'aaa',
        password: 'bbb',
        use: true
      }
    ];
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
  GET /api/connection/detail/:id
*/
exports.detail = async (ctx) => {
  const { id } = ctx.params;
  console.log('connection detail id', id);
  try {
    ctx.body = {
      id: 1,
      ip: '127.0.0.1',
      schema: 'test',
      name: 'aaa',
      password: 'bbb',
      use: true
    };
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
  POST /api/connection/save
  { title, body, tags }
*/
exports.save = async (ctx) => {
  console.log(ctx.request.body);
  try {
    ctx.body = {
      state: 'success'
    };
  } catch (e) {
    ctx.throw(e, 500);
  }
};

/*
  POST /api/connection/update
  { title, body, tags }
*/
exports.update = async (ctx) => {
  const { id } = ctx.params;
  console.log(id);
  console.log(ctx.request.body);
  try {
    ctx.body = {
      state: 'fail'
    };
  } catch (e) {
    ctx.throw(e, 500);
  }
};

/*
  DELETE /api/connection/delete/:id
*/
exports.delete = async (ctx) => {
  const { id } = ctx.params;
  try {
    ctx.body = {
      state: 'fail'
    };
  } catch (e) {
    ctx.throw(e, 500);
  }
};
