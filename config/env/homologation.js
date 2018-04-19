export default {
    session: 'secret-koa2-token',
    secret: 'secret-jwt-token',
    database: 'mongodb://' + process.env.MONGO_LOGIN + ':' + process.env.MONGO_PWD + '@' + process.env.MONGO_IP +':27017' + '/tg-homolog'
  }
  