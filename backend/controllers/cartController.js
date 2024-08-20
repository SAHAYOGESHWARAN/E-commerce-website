const Cart = require('../models/cartModel');

exports.getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user.id }).populate('products.product');
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addToCart = async (req, res) => {
    const { productId, quantity } = req.body;
    try {
        let cart = await Cart.findOne({ user: req.user.id });
        if (!cart) {
            cart = await Cart.create({ user: req.user.id, products: [{ product: productId, quantity }] });
        } else {
            const productExists = cart.products.find(p => p.product.toString() === productId);
            if (productExists) {
                productExists.quantity += quantity;
            } else {
                cart.products.push({ product: productId, quantity });
            }
        }
        await cart.save();
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.removeFromCart = async (req, res) => {
    const { productId } = req.body;
    try {
        const cart = await Cart.findOne({ user: req.user.id });
        cart.products = cart.products.filter(p => p.product.toString() !== productId);
        await cart.save();
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
