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
    title: '<高效能人士的七个习惯>人际关系的本质',
    age: 30,
    status: 200
  }
})


// 监听端口
app.listen(8000, () => {
  console.log(`The service has been successfully started...`)
})