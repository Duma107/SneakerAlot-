import React, { useState } from 'react';
import ProductGrid from '../components/marketplace/ProductGrid';
import ProductFilters from '../components/marketplace/ProductFilters';
import { motion } from 'framer-motion';

const Marketplace: React.FC = () => {
  const [filters, setFilters] = useState({});

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-grey-light pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-64">
            <ProductFilters onFilterChange={setFilters} />
          </div>
          <div className="flex-1">
            <ProductGrid />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Marketplace;