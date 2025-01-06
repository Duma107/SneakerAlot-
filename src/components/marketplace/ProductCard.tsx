import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transform transition-transform hover:scale-105"
          />
          <div className="absolute top-2 right-2 bg-navy text-white px-2 py-1 rounded-full text-sm">
            ${product.price}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-grey-dark">{product.name}</h3>
          <p className="text-sm text-grey mt-1">{product.brand}</p>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-sm text-grey-dark">
              {product.sizes.length} sizes available
            </span>
            <span className="text-sm font-medium text-navy">
              {product.colors.length} colors
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;