const info = require('../package.json');

module.exports ={
    swaggerDefinition: {
        info: {
            description: 'This is a pokemon api proxy service API',
            title: 'Pokemon Proxy',
            version: info.version,
        },
        host: 'localhost:3000',
        basePath: '/v1',
        produces: [
            "application/json",
        ],
        schemes: ['http'],
        
    },
    basedir: __dirname, //app absolute path
    files: ['../routes/*.js'] //Path to the API handle folder
}