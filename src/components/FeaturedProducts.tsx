import React from 'react';

const products = [
  {
    id: 1,
    name: "Air Jordan 1 High OG",
    price: "$180",
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28"
  },
  {
    id: 2,
    name: "Nike Dunk Low",
    price: "$110",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
  },
  {
    id: 3,
    name: "Air Jordan 4 Retro",
    price: "$200",
    image: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6"
  },
  {
    id: 4,
    name: "New Balance 550",
    price: "$120",
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570"
  }
];

const FeaturedProducts = () => {
  return (
    <div className="bg-grey-light py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-navy mb-8">Trending Now</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-grey-dark">{product.name}</h3>
                <p className="text-navy font-bold mt-2">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;