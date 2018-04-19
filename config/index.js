const env = process.env.NODE_ENV || 'development'

if(env === 'development')
    process.env.NODE_ENV = 'development';

const config = require(`./env/${env}`).default

export default Object.assign({}, config)
