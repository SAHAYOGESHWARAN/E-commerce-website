const express = require('express');
const {
    createOrder,
    getOrderById,
    updateOrderToPaid,
    getMyOrders,
    getOrders,
} = require('../controllers/orderController');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/')
    .post(protect, createOrder)
    .get(protect, admin, getOrders); // Admin route

router.route('/myorders')
    .get(protect, getMyOrders);

router.route('/:id')
    .get(protect, getOrderById);

router.route('/:id/pay')
    .put(protect, updateOrderToPaid);

module.exports = router;
