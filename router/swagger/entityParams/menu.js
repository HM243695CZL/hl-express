/**
 * @swagger
 * components:
 *   schemas:
 *     Menu:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: string
 *           description: 菜单id
 *           example: ''
 *           required: true
 *         pid:
 *           type: string
 *           format: string
 *           description: 父级菜单id
 *           example: ''
 *           required: true
 *         name:
 *           type: string
 *           format: string
 *           description: 组件名称
 *           example: ''
 *           required: true
 *         path:
 *           type: string
 *           format: string
 *           description: 菜单路径
 *           example: ''
 *           required: true
 *         title:
 *           type: string
 *           format: string
 *           description: 菜单标题
 *           example: ''
 *           required: true
 *         icon:
 *           type: string
 *           format: string
 *           description: 菜单图标
 *         rank:
 *           type: number
 *           format: number
 *           description: 菜单排序
 *         showLink:
 *           type: boolean
 *           format: boolean
 *           description: 是否显示
 *         isKeepAlive:
 *           type: boolean
 *           format: boolean
 *           description: 是否缓存
 *         isAffix:
 *           type: boolean
 *           format: boolean
 *           description: 是否固定
 */
