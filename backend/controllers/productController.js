const Product = require('../models/productModel');

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createProduct = async (req, res) => {
    const { name, description, price, imageUrl } = req.body;
    try {
        const product = await Product.create({ name, description, price, imageUrl });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
