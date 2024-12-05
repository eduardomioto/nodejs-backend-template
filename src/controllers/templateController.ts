import { type Request, type Response } from 'express';
import logger from '../logger';
import Entity from '../dtos/entity';
import Redis from 'ioredis';

require('dotenv').config({ path: './src/.env' });

const redis = new Redis({
  password: process.env.REDIS_PASSWORD,
  name: 'redis',
});

export const getEntities = async (_req: Request, res: Response) => {
  try {
    let entities = [];

    const cache = await new Promise<string | null>((resolve, reject) => {
      redis.get('entities', (err, data) => {
        if (err) reject(err);
        else resolve(data || null); 
      });
    });
    
    if (cache) entities = JSON.parse(cache);

    res.status(200).json(entities);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

export const getEntityById = async (req: Request, res: Response) => {
  const { entityId } = req.params;

  let entity = {};

  const cache = await redis.get('entity_' + entityId);
  if (cache) entity = JSON.parse(cache);

  return res.status(200).json(entity);  
};

export const createEntity = async (req: Request, res: Response) => {
  try {
    let entities = {};

    res.status(200).json(entities);
  } catch (error: any) {
    logger.error('An error occurred:', error);
    res.status(500).json({ error: error.message });
  }
};

export const updateEntity = async (req: Request, res: Response) => {
  try {
    const { id, name } = req.body;

    let entity = {}    

    return res.status(200).json(entity);
  } catch (error: any) {
    logger.error('An error occurred:', error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteEntity = async (req: Request, res: Response) => {
  const id = req.params.id;

  return res.status(200).json({ status: 'ok' });
};
