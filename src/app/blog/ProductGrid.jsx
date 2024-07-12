"use client"
import { useState } from 'react';

const ProductGrid = ({ products }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const truncateText = (text, length) => {
    if (text.length <= length) return text;
    return text.slice(0, length) + '...';
  };

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full">
      {products.map((product, index) => (
        <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm">
              {expandedIndex === index
                ? product.description
                : truncateText(product.description, 100)}
            </p>
            {product.description.length > 100 && (
              <button
                onClick={() => toggleDescription(index)}
                className="text-blue-500 mt-2"
              >
                {expandedIndex === index ? 'Show Less' : 'Show More'}
              </button>
            )}
            <p className="text-yellow-500 text-sm mt-2">Rating: {product.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
