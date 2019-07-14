/* eslint-disable object-shorthand */
/* eslint-disable prefer-template */
const Joi = require('joi');

/*
  GET /api/schema/getschemalist
*/
exports.getschemalist = async (ctx) => {
  const { connectionName } = ctx.params;
  console.log('schema getschemalist', connectionName);
  try {
    ctx.body = {
      ConnectionName: connectionName,
      Table: [
        {
          categoryName: 'a1',
          SchemaName: 'schema-a1',
          TableName: 'table-a1',
          TableType: 'Table',
          SequenceColumn: 'seq-a',
          Opaque: 'opaque-a'
        },
        {
          categoryName: 'a2',
          SchemaName: 'schema-a2',
          TableName: 'table-a2',
          TableType: 'Table',
          SequenceColumn: 'seq-a',
          Opaque: 'opaque-a'
        },
        {
          categoryName: 'a3',
          SchemaName: 'schema-a3',
          TableName: 'table-a3',
          TableType: 'Table',
          SequenceColumn: 'seq-a',
          Opaque: 'opaque-a'
        },
      ]
    };
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
  POST /api/schema/getschema
  { connectionName, catalogName, schemaName, tableName }
*/
exports.getschema = async (ctx) => {
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
  GET /api/schema/collectschema/:connectionName
*/
exports.collectschema = async (ctx) => {
  const { connectionName } = ctx.params;
  console.log('schema collectschema id', connectionName);
  try {
    ctx.body = {
      ConnectionName: connectionName,
      Table: [
        {
          categoryName: 'a',
          SchemaName: 'schema-a',
          TableName: 'table-a',
          TableType: 'Table',
          SequenceColumn: 'seq-a',
          Opaque: 'opaque-a'
        },
      ]
    };
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
  POST /api/schema/getscolumnlist
  { connectionName, query }
*/
exports.getscolumnlist = async (ctx) => {
  console.log(ctx.request.body);
  try {
    ctx.body = {
      state: 'success'
    };
  } catch (e) {
    ctx.throw(e, 500);
  }
};
