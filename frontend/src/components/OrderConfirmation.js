import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../utils/api';

const OrderConfirmation = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await api.get(`/api/orders/${id}`);
        setOrder(response.data);
      } catch (error) {
        console.error('Error fetching order:', error);
      }
    };

    fetchOrder();
  }, [id]);

  if (!order) return <p>Loading...</p>;

  return (
    <div>
      <h1>Order Confirmation</h1>
      <p>Order ID: {order._id}</p>
      <p>Status: {order.isPaid ? 'Paid' : 'Not Paid'}</p>
      <p>Total: ${order.totalPrice.toFixed(2)}</p>
      {/* Display other order details as necessary */}
    </div>
  );
};

export default OrderConfirmation;
