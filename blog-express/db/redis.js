const redis = require('redis');
const { REDIS_CONF } = require('../conf/db');

//创建客户端
console.log(REDIS_CONF.port);
const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host);
redisClient.on('error', err => {
    console.error(err);
})

module.exports = redisClient;