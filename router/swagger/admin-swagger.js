/**
 * @swagger
 * tags:
 *   - name: 用户管理
 * paths:
 *  /admin/admin/login:
 *     post:
 *       tags:
 *         - 用户管理
 *       summary: 登录   #接口备注
 *       description: 登录   #接口备注
 *       operationId: login
 *       requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Login'
 *       responses:
 *         '200':
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ResponseCommon'
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
 *       responses:
 *         '200':
 *             content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/ResponseCommon'
 *  /admin/admin/update:
 *    post:
 *     tags:
 *      - 用户管理
 *     summary: 更新用户
 *     description: 更新用户
 *     operationId: updateUser
 *     requestBody:
 *      content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Admin'
 *     responses:
 *       '200':
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseCommon'
 *  /admin/admin/view/{id}:
 *    get:
 *      tags:
 *        - 用户管理
 *      summary: 获取用户详情
 *      description: 获取用户详情
 *      operationId: userView
 *      parameters:
 *        - name: id
 *          in: path
 *          description: 用户id
 *          required: true
 *          schema:
 *            type: integer
 *            format: int64
 *      responses:
 *        '200':
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ResponseCommon'
 *  /admin/admin/delete/{id}:
 *    get:
 *      tags:
 *        - 用户管理
 *      summary: 删除用户
 *      description: 删除用户
 *      operationId: userDelete
 *      parameters:
 *        - name: id
 *          in: path
 *          description: 用户id
 *          required: true
 *          schema:
 *            type: integer
 *            format: int64
 *      responses:
 *        '200':
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ResponseCommon'
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
 *  /admin/admin/updatePass:
 *    post:
 *      tags:
 *        - 用户管理
 *      summary: 更新用户密码
 *      description: 更新用户密码
 *      operationId: updatePass
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UpdatePass'
 *      responses:
 *        '200':
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ResponseCommon'
 *  /admin/admin/getUserAuth/{id}:
 *    get:
 *      tags:
 *        - 用户管理
 *      summary: 获取用户权限
 *      description: 获取用户权限
 *      operationId: getUserAuth
 *      parameters:
 *        - name: id
 *          in: path
 *          description: 用户id
 *          required: true
 *          schema:
 *            type: integer
 *            format: int64
 *      responses:
 *        '200':
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ResponseCommon'
 *  /admin/admin/authRole:
 *    post:
 *      tags:
 *        - 用户管理
 *      summary: 授权角色
 *      description: 授权角色
 *      operationId: authRole
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/AuthRole'
 *      responses:
 *        '200':
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ResponseCommon'
 */
