const router = require('express').Router()
const { standardLimiter } = require('../middleware/rateLimeter')
const validateObjectId = require('../middleware/validateObjectId')
const productController = require('../controllers/products.controllers')


router.post('/', productController.createProduct)

router.get('/', standardLimiter, productController.getAllProducts)

router.get('/:productId', standardLimiter, validateObjectId, productController.getProductById)

router.put('/:productId', productController.updateProduct)

router.delete('/:productId', productController.deleteProduct)


module.exports = router