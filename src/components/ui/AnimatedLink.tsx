import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface AnimatedLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({ to, children, className = '' }) => {
  return (
    <Link to={to}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={className}
      >
        {children}
      </motion.div>
    </Link>
  );
};

export default AnimatedLink;