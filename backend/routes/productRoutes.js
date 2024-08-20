const express = require('express');
const {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} = require('../controllers/productController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/')
    .get(getProducts)       // Public access
    .post(protect, createProduct);  // Protected route for admins

router.route('/:id')
    .get(getProductById)    // Public access
    .put(protect, updateProduct)    // Protected route for admins
    .delete(protect, deleteProduct);  // Protected route for admins

module.exports = router;
