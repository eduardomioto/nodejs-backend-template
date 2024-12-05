import { type Request, type Response } from 'express';
import logger from '../logger';

require('dotenv').config({ path: './src/.env' });

export const getProducts = async (_req: Request, res: Response) => {
  try {
   
    res.json([]);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

export const getProductsById = async (req: Request, res: Response) => {
  const { id } = req.params;


  return res.json({});
};

export const createProduct = async (req: Request, res: Response) => {
  try {
   
    res.status(201).json({});
  } catch (error: any) {
    logger.error('An error occurred:', error);
    res.status(400).json({ error: error.message });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id, name } = req.body;

    res.status(200).json({});
  } catch (error: any) {
    logger.error('An error occurred:', error);
    res.status(400).json({ error: error.message });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const id = req.params.id;

  return res.status(200).json({ status: 'ok' });
};

async function updateProductItem(product_id: any, name: any) {
  let entry = {};

  return entry;
}

async function getProduct(productId: string) {
  let entry = {};

  return entry;
}

function reject(err: Error) {
  throw new Error('Function not implemented.');
}

function resolve(data: string | null | undefined) {
  throw new Error('Function not implemented.');
}