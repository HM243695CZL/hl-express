import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import path from 'path';
import routerList from './router';
import {config} from './config';

const app = express();

/**
 * swagger配置
 */
const swaggerOption = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: config.swaggerTitle,
      version: config.swaggerVersion
    }
  },
  // 指定swagger-jsdoc去哪个路由下收集swagger注释
  apis: [path.join(__dirname, '/router/**/*.js')]
}
const swaggerSpec = swaggerJSDoc(swaggerOption);

/**
 * 开放swagger 相关接口
 */
app.get('/swagger.json', (req, res) => {
res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});
// 使用swaggerSpec生成swagger文档页面，并开放在指定路由
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * 循环注册路由
 */
routerList.map(router => {
  app.use(router);
})
app.listen(config.port, () => {
  console.log('服务器已启动,地址： http://localhost:' + config.port);
  console.log('接口文档地址： http://localhost:' + config.port + '/api-docs');
});
