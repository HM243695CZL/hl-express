/**
 * @swagger
 * tags:
 *   - name: 用户管理
 * paths:
 *  /admin/admin/page:
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
 *  /admin/admin/create:
 *     post:
 *       tags:
 *         - 用户管理
 *       summary: 创建用户   #接口备注
 *       description: 创建用户   #接口备注
 *       operationId: createUser
 *       requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Admin'
 *  /admin/admin/list:
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
 */
