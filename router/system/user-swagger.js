/**
 * @swagger
 * tags:
 *   - name: 用户管理
 * paths:
 *  /user/page:
 *     post:
 *       tags:
 *         - 用户管理
 *       summary: 分页查询   #接口备注
 *       description: 分页查询   #接口备注
 *       operationId: userPage
 *       requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PageCommon'
 *       responses:
 *         '200':
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ResponseCommon'
 *  /user/list:
 *     get:
 *       tags:
 *         - 用户管理
 *       summary: 获取所有用户
 *       description: 获取所有用户
 *       operationId: userList
 *       responses:
 *         '200':
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ResponseCommon'
 * components:
 *  schemas:
 *   PageCommon:
 *       type: object
 *       properties:
 *         first:
 *           type: integer
 *           format: int64
 *           example: 1
 *         rows:
 *           type: integer
 *           format: int64
 *           example: 10
 *   ResponseCommon:
 *    type: object
 *    properties:
 *     status:
 *      type: integer
 *      description: 返回码
 *      example: 200
 *     message:
 *      type: string
 *      description: 返回信息
 *      example: 操作成功
 *     data:
 *      type: object
 *      description: 响应数据
 *      example: {}
 */
