import React from 'react';
import { motion } from 'framer-motion';

interface ProductFiltersProps {
  onFilterChange: (filters: any) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({ onFilterChange }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white p-6 rounded-lg shadow-sm"
    >
      <h3 className="text-lg font-semibold text-navy mb-4">Filters</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="font-medium text-grey-dark mb-2">Brand</h4>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Nike</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Jordan</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">New Balance</span>
            </label>
          </div>
        </div>

        <div>
          <h4 className="font-medium text-grey-dark mb-2">Size</h4>
          <div className="grid grid-cols-3 gap-2">
            {[7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11].map((size) => (
              <button
                key={size}
                className="px-2 py-1 border rounded hover:bg-navy hover:text-white transition"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium text-grey-dark mb-2">Price Range</h4>
          <input
            type="range"
            min="0"
            max="500"
            className="w-full"
          />
          <div className="flex justify-between text-sm text-grey">
            <span>$0</span>
            <span>$500</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductFilters;