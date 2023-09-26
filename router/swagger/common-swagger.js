/**
 * @swagger
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
