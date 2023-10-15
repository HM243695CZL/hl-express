const SequelizeAuto = require('sequelize-auto');
const {config} = require('./index');

const tableConfig = [
    {
        modelPath: '../model',
    }
]
tableConfig.map(item => {
    let auto = new SequelizeAuto(config.databaseName, config.dbUser, config.dbPassword, {
        host: config.dbHost,
        dialect: 'mysql',
        directory: item.modelPath,
        port: config.dbPort,
        singularize: true, // 不使用复数表名
        additional: {
            timestamps: true,
            createdAt: 'add_time',
            updatedAt: 'update_time',
        }
    });
    auto.run((err) => {
        if (err) throw err;
    });

});

