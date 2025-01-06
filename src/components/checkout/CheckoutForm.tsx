import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { ShippingDetails } from '../../types';
import { motion } from 'framer-motion';

const CheckoutForm: React.FC = () => {
  const { state, dispatch } = useCart();
  const [shippingDetails, setShippingDetails] = useState<ShippingDetails>({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle checkout logic here
    console.log('Processing order:', { items: state.items, shipping: shippingDetails });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-navy mb-4">Shipping Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-navy"
              required
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-navy"
              required
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-navy md:col-span-2"
              required
            />
            <input
              type="text"
              placeholder="City"
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-navy"
              required
            />
            <input
              type="text"
              placeholder="State/Province"
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-navy"
              required
            />
            <input
              type="text"
              placeholder="ZIP Code"
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-navy"
              required
            />
            <input
              type="text"
              placeholder="Country"
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-navy"
              required
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-navy mb-4">Payment Information</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Card Number"
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-navy"
              required
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-navy"
                required
              />
              <input
                type="text"
                placeholder="CVC"
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-navy"
                required
              />
            </div>
          </div>
        </div>

        <div className="border-t pt-6">
          <div className="flex justify-between text-lg font-semibold mb-4">
            <span>Total:</span>
            <span>${state.total.toFixed(2)}</span>
          </div>
          <button
            type="submit"
            className="w-full bg-navy text-white py-3 rounded-lg hover:bg-navy-light transition"
          >
            Place Order
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default CheckoutForm;