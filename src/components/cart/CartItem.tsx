import React from 'react';
import { useCart } from '../../context/CartContext';
import { CartItem as CartItemType } from '../../types';
import { motion } from 'framer-motion';
import { Trash2 } from 'lucide-react';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { dispatch } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm"
    >
      <img
        src={item.images[0]}
        alt={item.name}
        className="w-24 h-24 object-cover rounded"
      />
      
      <div className="flex-1">
        <h3 className="font-semibold text-grey-dark">{item.name}</h3>
        <p className="text-sm text-grey">Size: {item.selectedSize}</p>
        <p className="text-sm text-grey">Color: {item.selectedColor}</p>
        
        <div className="mt-2 flex items-center gap-4">
          <div className="flex items-center">
            <button
              onClick={() => dispatch({
                type: 'UPDATE_QUANTITY',
                payload: { id: item.id, quantity: Math.max(0, item.quantity - 1) }
              })}
              className="px-2 py-1 bg-grey-light rounded-l hover:bg-grey-dark hover:text-white transition"
            >
              -
            </button>
            <span className="px-4 py-1 bg-grey-light">{item.quantity}</span>
            <button
              onClick={() => dispatch({
                type: 'UPDATE_QUANTITY',
                payload: { id: item.id, quantity: item.quantity + 1 }
              })}
              className="px-2 py-1 bg-grey-light rounded-r hover:bg-grey-dark hover:text-white transition"
            >
              +
            </button>
          </div>
          
          <button
            onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}
            className="text-grey-dark hover:text-red-500 transition"
          >
            <Trash2 size={20} />
          </button>
        </div>
      </div>
      
      <div className="text-right">
        <p className="font-semibold text-navy">${(item.price * item.quantity).toFixed(2)}</p>
      </div>
    </motion.div>
  );
};

export default CartItem;