import { Request, Response } from 'express';
import logger from '../logger';
import redis from '../config/connection';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

require('dotenv').config({ path: './src/.env' });

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

    if (!cache) {
      entities = await prisma.entity.findMany();
      redis.set('entities', JSON.stringify(entities));
    }
    
    res.status(200).json(entities);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

export const getEntityById = async (req: Request, res: Response) => {
  const { id } = req.params;

  let entity = {};

  const cache = await redis.get('entity_' + id);
  if (cache) entity = JSON.parse(cache);

  if (!cache) {
    entity = await prisma.entity.findUnique({
      where: { id: Number(id) },
    });

    if (entity) {
      redis.set('entity_' + id, JSON.stringify(entity));
    } else {
      res.status(404).send('Entity not found');
    }
  }

  res.status(200).json(entity);  
};

export const createEntity = async (req: Request, res: Response) => {
  try {
    let entities = {};
    const { name, description } = req.body;

    const newEntity = await prisma.entity.create({
      data: {
        name,
        description
      }
    });

  await redis.del('entities'); // Invalidate the cache for the list of entities
  await redis.set('entity_' + newEntity.id, JSON.stringify(newEntity)); // Cache the new entity

  res.status(201).json(newEntity);
  } catch (error: any) {
    logger.error('An error occurred:', error);
    res.status(500).json({ error: error.message });
  }
};

export const updateEntity = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;

    const entity = await prisma.entity.update({
      where: { id: Number(req.params.id) },
      data: {
        name,
        description
      },
    });

    await redis.del('entities'); // Invalidate the cache for the list of entities
    await redis.set('entity_' + entity.id, JSON.stringify(entity)); // Cache the new entity
    
    res.status(200).json(entity);
  } catch (error: any) {
    logger.error('An error occurred:', error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteEntity = async (req: Request, res: Response) => {
  await redis.del('entities'); // Invalidate

  await prisma.entity.delete({
    where: { id: Number(req.params.id) }  
  });

  res.status(200).json({ status: 'ok' });
};
