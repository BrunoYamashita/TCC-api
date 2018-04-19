export default {
    session: 'secret-koa2-token',
    secret: 'secret-jwt-token',
    database: 'mongodb://localhost:27017/local',
    port: process.env.PORT || 3000
  }
  