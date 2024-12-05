import { type Request, type Response } from 'express';
import logger from '../logger';

require('dotenv').config({ path: './src/.env' });

export const getEntities = async (_req: Request, res: Response) => {
  try {
   
    res.json([]);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

export const getEntityById = async (req: Request, res: Response) => {
  const { id } = req.params;


  return res.json({});
};

export const createEntity = async (req: Request, res: Response) => {
  try {
   
    res.status(201).json({});
  } catch (error: any) {
    logger.error('An error occurred:', error);
    res.status(400).json({ error: error.message });
  }
};

export const updateEntity = async (req: Request, res: Response) => {
  try {
    const { id, name } = req.body;

    res.status(200).json({});
  } catch (error: any) {
    logger.error('An error occurred:', error);
    res.status(400).json({ error: error.message });
  }
};

export const deleteEntity = async (req: Request, res: Response) => {
  const id = req.params.id;

  return res.status(200).json({ status: 'ok' });
};
