import { Router } from 'express'
import {
    getProducts,
    getProductsById,
    createProduct,
    updateProduct,
    deleteProduct
} from '../controllers/templateController';

const router = Router();

router.get('/', getProducts)
//router.get('/:productId', getProductsById)
router.post('/', createProduct)
router.put('/:productId', updateProduct)
//router.delete('/:productId', deleteProduct)


export default router