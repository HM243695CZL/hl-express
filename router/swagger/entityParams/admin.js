/**
 * @swagger
 * components:
 *  schemas:
 *   Admin:
 *    type: object
 *    properties:
 *     id:
 *      type: string
 *      format: string
 *      description: 用户id
 *      example: ''
 *     username:
 *      type: string
 *      format: string
 *      description: 用户名称
 *      required: true
 *      example: ''
 *     avatar:
 *      type: string
 *      format: string
 *      description: 用户头像
 *      example: ''
 *     sex:
 *      type: string
 *      format: string
 *      description: 用户性别 1男 2女
 *      example: ''
 */


/**
 * @swagger
 * components:
 *  schemas:
 *   Login:
 *    type: object
 *    properties:
 *      username:
 *       type: string
 *       format: string
 *       description: 用户名称
 *       example: ''
 *       required: true
 *      password:
 *       type: string
 *       format: string
 *       description: 用户密码
 *       example: ''
 *       required: true
 */


/**
 * @swagger
 * components:
 *  schemas:
 *   UpdatePass:
 *     type: object
 *     properties:
 *       id:
 *        type: string
 *        format: string
 *        description: 用户id
 *        example: ''
 *        required: true
 *       password:
 *        type: string
 *        format: string
 *        description: 用户密码
 *        example: ''
 *        required: true
 */
