const express = require('express');
const { getCart, addToCart } = require('../controllers/cartController');
const { protect } = require('../middleware/authMiddleware'); // Ensure you are exporting a middleware function
const router = express.Router();

router.route('/')
    .get(protect, getCart)
    .post(protect, addToCart);

module.exports = router; // Ensure you are exporting the router instance, not an object
