import React from 'react';

const Newsletter = () => {
  return (
    <div className="bg-navy py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Never Miss a Drop</h2>
        <p className="text-grey-light mb-8 max-w-2xl mx-auto">
          Sign up for our newsletter to receive exclusive offers, early access to releases, and the latest sneaker news.
        </p>
        
        <form className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white/20"
          />
          <button
            type="submit"
            className="bg-white text-navy px-6 py-2 rounded-full font-semibold hover:bg-grey-light transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;