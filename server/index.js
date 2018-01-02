const Koa = require('koa');

const app = new Koa();
const PORT = '3001';

app.use(async (ctx) => {
  ctx.body = {
    status: 'success',
    message: 'Hello YEah',
  };
});

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;
