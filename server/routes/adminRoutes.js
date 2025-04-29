import express from 'express'
const router = express.Router()
import { addProductHandler, findAllProductsHandler } from '../controller/productController.js'

router.post('/addproduct', addProductHandler)
router.get('/allproducts', findAllProductsHandler)

export default router