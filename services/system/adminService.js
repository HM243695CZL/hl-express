const AdminModel = require('../../model/admin/admin');
const {successPageResult, successResult, errorResult, config} = require('../../config');
const getUserPageList = async (req, res, next) => {
    const {pageIndex, pageSize} = req.body;
    await AdminModel.findAll({
        limit: pageSize,
        offset: (pageIndex - 1) * pageSize
    }).then(async result => res.json(successPageResult(result, await AdminModel.count())));
};
const createUser = (req, res, next) => {
    const {avatar, sex, username} = req.body;
    AdminModel.create({
        avatar,
        sex,
        username,
        password: config.initPassword
    }).then(() => {
        res.json(successResult(null));
    }).catch(err => {
        res.json(errorResult(err.errors[0].message));
    });
};

const login = (req, res, next) => {
    res.json({
        'status': 200,
        'message': '操作成功',
        'data': {
            'tokenHead': 'Bearer ',
            'userInfo': {
                'addTime': null,
                'updateTime': null,
                'id': 15,
                'username': 'admin',
                'password': '$2a$10$9lKK.EOLGbJih6hI4epe7uzE775csXE1Q0ZBo7f0./I7NXKxp/0vK',
                'sex': null,
                'wxOpenId': null,
                'lastLoginIp': null,
                'lastLoginTime': null,
                'avatar': 'https://hl-mall-tiny.oss-cn-chengdu.aliyuncs.com/hlmall/images/20230913/1e32531b4515f9ca.jpg.avif',
                'roleIds': null,
                'roles': [
                    'admin'
                ]
            },
            'menuList': [
                {
                    'id': 21,
                    'pid': null,
                    'path': '/system',
                    'name': 'system',
                    'component': 'layout',
                    'meta': {
                        'title': '系统管理',
                        'isLink': null,
                        'showLink': true,
                        'isKeepAlive': true,
                        'isAffix': false,
                        'isIframe': false,
                        'roles': [
                            'admin'
                        ],
                        'icon': 'fa fa-cog'
                    },
                    'children': [
                        {
                            'id': 22,
                            'pid': 21,
                            'path': '/system/user',
                            'name': 'systemUser',
                            'component': '/system/user',
                            'meta': {
                                'title': '用户列表',
                                'isLink': null,
                                'showLink': true,
                                'isKeepAlive': true,
                                'isAffix': false,
                                'isIframe': false,
                                'roles': [
                                    'admin'
                                ],
                                'icon': 'ele-Avatar'
                            },
                            'children': []
                        },
                        {
                            'id': 23,
                            'pid': 21,
                            'path': '/system/role',
                            'name': 'systemRole',
                            'component': '/system/role',
                            'meta': {
                                'title': '角色列表',
                                'isLink': null,
                                'showLink': true,
                                'isKeepAlive': true,
                                'isAffix': false,
                                'isIframe': false,
                                'roles': [
                                    'admin'
                                ],
                                'icon': 'ele-Briefcase'
                            },
                            'children': []
                        },
                        {
                            'id': 24,
                            'pid': 21,
                            'path': '/system/menu',
                            'name': 'systemMenu',
                            'component': '/system/menu',
                            'meta': {
                                'title': '菜单列表',
                                'isLink': null,
                                'showLink': true,
                                'isKeepAlive': true,
                                'isAffix': false,
                                'isIframe': false,
                                'roles': [
                                    'admin'
                                ],
                                'icon': 'fa fa-list'
                            },
                            'children': []
                        }
                    ]
                }
            ],
            'token': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImNyZWF0ZWQiOjE2OTU3OTY5OTEyOTUsImV4cCI6MTY5NjQwMTc5MX0.0kCkVLIyKoXp149bdGTy1WBSivfBNLF1UOlf3Rdx-0kP0uWRKyWwYhtvMEbKiQqgI_IDP4-9vw4ZM64YZUo5LA'
        }
    });
};
const getUserList = async (req, res, next) => {
    res.json(successResult(await AdminModel.findAll()));
};
module.exports = {
    createUser,
    getUserPageList,
    login,
    getUserList
};
