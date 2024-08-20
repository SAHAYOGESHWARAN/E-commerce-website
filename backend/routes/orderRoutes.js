const express = require('express');
const { createOrder, getOrders, getOrderById, updateOrder, deleteOrder } = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, createOrder);          // Create a new order
router.get('/', protect, getOrders);             // Get all orders for a user
router.get('/:id', protect, getOrderById);       // Get a single order by ID
router.put('/:id', protect, updateOrder);        // Update an order
router.delete('/:id', protect, deleteOrder);     // Delete an order

module.exports = router;
