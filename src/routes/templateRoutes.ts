import { Router } from 'express'
import {
    getEntities,
    getEntityById,
    createEntity,
    updateEntity,
    deleteEntity
} from '../controllers/templateController';

const router = Router();

/**
 * @swagger
 * /entities:
 *  get:
 *    description: Use to get all entities
 *    tags: [Entity]
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/', getEntities)

/**
 * @swagger
 * /entities/:
 *   post:
 *     summary: Creates a new entity
 *     tags: [Entity]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Entity'
 *     responses:
 *       '201':
 *         description: Entity successfully created
 *       '400':
 *         description: Invalid entity object
 */
router.post('/', createEntity)


export default router