const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const path = require('path');
const bodyParser = require('body-parser');
const reqResMiddleware = require('./middleware/reqResMiddleware');
const routerList = require('./router');
const { config } = require('./config');

const app = express();
/**
 * 配置跨域
 */
app.use(cors());
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

app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json({
  limit: '10mb'
}));
/**
 * 全局请求响应中间件
 */
app.use(reqResMiddleware);
/**
 * 循环注册路由
 */
routerList.map(router => {
  app.use(router);
});
/**
 * 配置404请求
 */
app.use((req, res, next) => {
  res.json({
    status: 404,
    message: req.path + '接口不存在'
  });
});
app.listen(config.port, () => {
  console.log('服务器已启动,地址： http://localhost:' + config.port);
  console.log('接口文档地址： http://localhost:' + config.port + '/api-docs');
});
