import express from 'express';
const app = express();
import routerList from './router';

/**
 * 循环注册路由
 */
routerList.map(router => {
  app.use(router);
})
app.listen(3000, () => {
  console.log('服务器已启动, 请打开 http://localhost:3000');
});
