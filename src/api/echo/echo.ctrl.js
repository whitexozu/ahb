const Joi = require('joi');


exports.dump = async (ctx) => {
  const page = parseInt(ctx.query.page || 1, 10);
  console.log('>>>>> page', page);
  try {
    ctx.body = [
      {
        id: 0, name:'aaa'
      },
      {
        id: 1, name:'bbb'
      }
    ]
    // ctx.set('Last-Page', Math.ceil(postCount / 10));
  } catch (e) {
    ctx.throw(500, e);
  }
};

exports.success = async (ctx) => {
  try {
    ctx.body = {
      state: 'success'
    }
  } catch (e) {
    ctx.throw(e, 500);
  }
};

exports.fail = async (ctx) => {
  try {
    ctx.body = {
      state: 'fail'
    }
  } catch (e) {
    ctx.throw(e, 500);
  }
};

exports.echo = async (ctx) => {
  try {
    ctx.body = ctx.request.body;
  } catch (e) {
    ctx.throw(e, 500);
  }
};
