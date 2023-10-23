/**
 * @swagger
 * components:
 *   schemas:
 *     Role:
 *      type: object
 *      properties:
 *       id:
 *         type: string
 *         format: string
 *         description: 角色id
 *         example: ''
 *         required: true
 *       name:
 *         type: string
 *         format: string
 *         description: 角色名称
 *         example: ''
 *         required: true
 *       key:
 *         type: string
 *         format: string
 *         description: 角色标识
 *         example: ''
 *         required: true
 *       desc:
 *         type: string
 *         format: string
 *         description: 角色描述
 *         example: ''
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     RoleAuth:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: string
 *           description: 角色id
 *           example: ''
 *           required: true
 *         menuIds:
 *           type: array
 *           items:
 *             type: string
 *             format: string
 *             description: 菜单id
 *             example: ''
 *             required: true
 */
