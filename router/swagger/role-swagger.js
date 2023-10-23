/**
 * @swagger
 * tags:
 *   - name: 角色管理
 * paths:
 *   /admin/role/page:
 *     post:
 *       tags:
 *         - 角色管理
 *       summary: 分页查询   #接口备注
 *       description: 分页查询   #接口备注
 *       operationId: rolePage
 *       requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/PageCommon'
 *       responses:
 *         '200':
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ResponseCommon'
 *   /admin/role/list:
 *     get:
 *       tags:
 *         - 角色管理
 *       summary: 查询所有角色   #接口备注
 *       description: 查询所有角色   #接口备注
 *       operationId: roleList
 *       responses:
 *         '200':
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ResponseCommon'
 *   /admin/role/create:
 *     post:
 *       tags:
 *         - 角色管理
 *       summary: 创建角色   #接口备注
 *       description: 创建角色   #接口备注
 *       operationId: createRole
 *       requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Role'
 *       responses:
 *         '200':
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ResponseCommon'
 *   /admin/role/update:
 *     post:
 *       tags:
 *         - 角色管理
 *       summary: 更新角色   #接口备注
 *       description: 更新角色   #接口备注
 *       operationId: updateRole
 *       requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Role'
 *       responses:
 *         '200':
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ResponseCommon'
 *   /admin/role/view/{id}:
 *     get:
 *       tags:
 *         - 角色管理
 *       summary: 获取角色详情   #接口备注
 *       description: 获取角色详情   #接口备注
 *       operationId: viewRole
 *       parameters:
 *         - name: id
 *           in: path
 *           description: 角色id
 *           required: true
 *           schema:
 *             type: string
 *             format: string
 *       responses:
 *         '200':
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ResponseCommon'
 *   /admin/role/delete/{id}:
 *     get:
 *       tags:
 *         - 角色管理
 *       summary: 删除角色   #接口备注
 *       description: 删除角色   #接口备注
 *       operationId: deleteRole
 *       parameters:
 *         - name: id
 *           in: path
 *           description: 角色id
 *           required: true
 *           schema:
 *             type: string
 *             format: string
 *       responses:
 *         '200':
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ResponseCommon'
 *   /admin/role/viewAuth/{id}:
 *     get:
 *       tags:
 *         - 角色管理
 *       summary: 获取角色权限   #接口备注
 *       description: 获取角色权限   #接口备注
 *       operationId: viewRoleAuth
 *       parameters:
 *         - name: id
 *           in: path
 *           description: 角色id
 *           required: true
 *           schema:
 *             type: string
 *             format: string
 *       responses:
 *         '200':
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ResponseCommon'
 *
 *   /admin/role/auth:
 *     post:
 *       tags:
 *         - 角色管理
 *       summary: 角色授权   #接口备注
 *       description: 角色授权   #接口备注
 *       operationId: roleAuth
 *       requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RoleAuth'
 *       responses:
 *         '200':
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ResponseCommon'
 */
