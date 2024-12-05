import Redis from 'ioredis';
require('dotenv').config({ path: './src/.env' });

export default async function () {
  const redis = new Redis({
    password: process.env.REDIS_PASSWORD,
    name: 'redis',
  });

  return redis;
}