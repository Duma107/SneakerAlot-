import React from 'react';
import CheckoutForm from '../components/checkout/CheckoutForm';

const Checkout: React.FC = () => {
  return (
    <div className="min-h-screen bg-grey-light pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-navy mb-8">Checkout</h1>
        <CheckoutForm />
      </div>
    </div>
  );
};

export default Checkout;