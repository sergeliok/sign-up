const Koa = require('koa');
const config = require('./config/index');
const Router = require('koa-router');
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');

const { port } = config;

const app = new Koa();
const router = new Router();

router
  .get('/', async (ctx, next) => {
    await next();
    ctx.response.body = {
      hi: 'It works',
    };
  })
  .post('/user', async (ctx, next) => {
    await next();
    ctx.response.status = 200;
    ctx.response.body = {
      ...ctx.request.body,
      password: undefined,
      confirmPassword: undefined,
    };
  });

app
  .use(cors())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

const server = app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});

export default server;
