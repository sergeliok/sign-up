const Koa = require('koa');
const config = require('./config/index');
const Router = require('koa-router');
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');

const { port } = config;

const app = new Koa();
const router = new Router();

// app.use(async (ctx) => {
//   ctx.body = {
//     status: 'success',
//     message: 'Hello YEah',
//   };
// });

router
  .get('/', async (ctx, next) => {
    await next();
    console.log(ctx.request.body);
    ctx.response.body = {
      hi: 'It works',
    };
  })
  .post('/user', async (ctx, next) => {
    // ctx.body = ctx.req;
    // console.log(Object.keys(ctx.request.body));
    await next();
    ctx.response.status = 200;
    ctx.response.body = {
      ...ctx.request.body,
      password: undefined,
      confirmPassword: undefined,
    };


    // console.log(opt);
    // ctx.response.body = opt;
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
