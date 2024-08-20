import React, { useEffect, useState } from 'react';
import api from '../utils/api';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await api.get('/api/cart');
        setCart(response.data.products);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };

    fetchCart();
  }, []);

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.map(item => (
          <li key={item.product._id}>
            <h2>{item.product.name}</h2>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.product.price}</p>
          </li>
        ))}
      </ul>
      <button onClick={checkout}>Proceed to Checkout</button>
    </div>
  );
};

const checkout = async () => {
  // Handle checkout logic
};

export default Cart;
