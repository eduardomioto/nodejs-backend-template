import Redis from 'ioredis';
require('dotenv').config({ path: './src/.env' });

const redis = new Redis({
  password: process.env.REDIS_PASSWORD,
  name: 'redis',
});

export default redis;
