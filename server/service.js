const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const staticServer = require('koa-static');
const app = new Koa();


app.use(bodyParser())

// 启用路由
app.use(router.routes());
app.use(router.allowedMethods());


router.get('/api/goods', async(ctx) => {
  ctx.body = {
    title: '就业怎么保？脱贫摘帽是新生活新奋斗的起点',
    age: 30,
    status: 200
  }
})


// 监听端口
app.listen(8000, () => {
  console.log(`The service has been successfully started...`)
})