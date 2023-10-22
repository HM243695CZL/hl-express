/**
 * @swagger
 * tags:
 *   - name: 菜单管理
 * paths:
 *   /admin/menu/list:
 *     get:
 *       tags:
 *         - 菜单管理
 *       summary: 获取所有菜单   #接口备注
 *       description: 获取所有菜单   #接口备注
 *       operationId: menuList
 *       responses:
 *         '200':
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ResponseCommon'
 *   /admin/menu/create:
 *     post:
 *       tags:
 *         - 菜单管理
 *       summary: 创建菜单   #接口备注
 *       description: 创建菜单   #接口备注
 *       operationId: createMenu
 *       requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Menu'
 *       responses:
 *         '200':
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ResponseCommon'
 *   /admin/menu/update:
 *     post:
 *       tags:
 *         - 菜单管理
 *       summary: 更新菜单   #接口备注
 *       description: 更新菜单   #接口备注
 *       operationId: updateMenu
 *       requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Menu'
 *       responses:
 *         '200':
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ResponseCommon'
 *   /admin/menu/view/{id}:
 *     get:
 *       tags:
 *         - 菜单管理
 *       summary: 获取菜单详情   #接口备注
 *       description: 获取菜单详情   #接口备注
 *       operationId: viewMenu
 *       parameters:
 *         - name: id
 *           in: path
 *           description: 菜单id
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
 *   /admin/menu/delete/{id}:
 *     get:
 *       tags:
 *         - 菜单管理
 *       summary: 删除菜单   #接口备注
 *       description: 删除菜单   #接口备注
 *       operationId: deleteMenu
 *       parameters:
 *         - name: id
 *           in: path
 *           description: 菜单id
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
 */
