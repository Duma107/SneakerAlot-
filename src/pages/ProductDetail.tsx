import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { motion } from 'framer-motion';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { dispatch } = useCart();
  const product = products.find(p => p.id === id);
  
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    if (selectedSize && selectedColor) {
      dispatch({
        type: 'ADD_TO_CART',
        payload: {
          ...product,
          quantity: 1,
          selectedSize,
          selectedColor
        }
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-grey-light pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            className="space-y-4"
          >
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} - View ${index + 1}`}
                className="w-full rounded-lg shadow-sm"
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ x: 20 }}
            animate={{ x: 0 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-3xl font-bold text-navy">{product.name}</h1>
              <p className="text-xl text-grey-dark mt-2">${product.price}</p>
            </div>

            <div>
              <h3 className="font-semibold text-grey-dark mb-2">Select Size</h3>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded border ${
                      selectedSize === size
                        ? 'bg-navy text-white'
                        : 'hover:bg-grey-light'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-grey-dark mb-2">Select Color</h3>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded border ${
                      selectedColor === color
                        ? 'bg-navy text-white'
                        : 'hover:bg-grey-light'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-grey-dark mb-2">Description</h3>
              <p className="text-grey">{product.description}</p>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={!selectedSize || !selectedColor}
              className="w-full bg-navy text-white py-3 rounded-lg hover:bg-navy-light transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Add to Cart
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetail;