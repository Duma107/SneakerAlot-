import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';
import CartDrawer from './cart/CartDrawer';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { state } = useCart();
  const location = useLocation();

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <nav className="bg-white shadow-sm fixed w-full z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-navy">
                SneakerALot
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/marketplace" 
                className={`text-grey-dark hover:text-navy transition ${
                  location.pathname === '/marketplace' ? 'text-navy font-semibold' : ''
                }`}
              >
                Marketplace
              </Link>
              <Link 
                to="/new-releases" 
                className="text-grey-dark hover:text-navy transition"
              >
                New Releases
              </Link>
              <Link 
                to="/sale" 
                className="text-grey-dark hover:text-navy transition"
              >
                Sale
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Search className="w-6 h-6 text-grey-dark cursor-pointer hover:text-navy transition" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <User className="w-6 h-6 text-grey-dark cursor-pointer hover:text-navy transition" />
              </motion.button>
              
              <motion.div className="relative">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsCartOpen(true)}
                >
                  <ShoppingBag className="w-6 h-6 text-grey-dark cursor-pointer hover:text-navy transition" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-navy text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </motion.button>
              </motion.div>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/marketplace" className="block px-3 py-2 text-grey-dark hover:text-navy">
              Marketplace
            </Link>
            <Link to="/new-releases" className="block px-3 py-2 text-grey-dark hover:text-navy">
              New Releases
            </Link>
            <Link to="/sale" className="block px-3 py-2 text-grey-dark hover:text-navy">
              Sale
            </Link>
          </div>
        </motion.div>
      </nav>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;