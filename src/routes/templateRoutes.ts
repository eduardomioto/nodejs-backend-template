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
 * /entities/{entityId}:
 *   get:
 *     summary: Retrieves a entity by ID
 *     tags: [Entity]
 *     parameters:
 *       - in: path
 *         name: entityId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Entity object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Entity'
 *         description: Entity not found
 */
//router.get('/:entity', getEntityById)

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
 * /entities/{entityId}:
 *   put:
 *     summary: Updates a entity by ID
 *     tags: [Entity]
 *     parameters:
 *       - in: path
 *         name: entityId
 *         required: true
 *         schema:
 *           type: integer
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
router.put('/:entity', updateEntity)

/**
 * @swagger
 * /entities/{entityId}:
 *   delete:
 *     summary: Deletes a entity by ID
 *     tags: [Entity]
 *     parameters:
 *       - in: path
 *         name: entity
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: Entity successfully deleted
 *       '404':
 *         description: Entity not found
 */
//router.delete('/:entity', deleteEntity)


export default router