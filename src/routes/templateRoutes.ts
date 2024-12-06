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

/**
 * @swagger
 * /entities/{id}:
 *   get:
 *     summary: Get an entity by ID
 *     tags: [Entity]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The entity ID
 *     responses:
 *       '200':
 *         description: A successful response
 *       '404':
 *         description: Entity not found
 */
router.get('/:id', getEntityById)

/**
 * @swagger
 * /entities/{id}:
 *   put:
 *     summary: Update an entity by ID
 *     tags: [Entity]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The entity ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Entity'
 *     responses:
 *       '200':
 *         description: Entity successfully updated
 *       '400':
 *         description: Invalid entity object
 *       '404':
 *         description: Entity not found
 */
router.put('/:id', updateEntity)

/**
 * @swagger
 * /entities/{id}:
 *   delete:
 *     summary: Delete an entity by ID
 *     tags: [Entity]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The entity ID
 *     responses:
 *       '200':
 *         description: Entity successfully deleted
 *       '404':
 *         description: Entity not found
 */
router.delete('/:id', deleteEntity)

export default router