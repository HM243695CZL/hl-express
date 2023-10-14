/**
 * @swagger
 * components:
 *  schemas:
 *   PageCommon:
 *       type: object
 *       properties:
 *         pageIndex:
 *           type: integer
 *           format: int64
 *           example: 1
 *           required: true
 *         pageSize:
 *           type: integer
 *           format: int64
 *           example: 10
 *           required: true
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
