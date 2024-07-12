const ProductGrid = ({ products }) => {
    return (
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full">
        {products.map((product, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-sm">{product.description}</p>
              <p className="text-yellow-500 text-sm mt-2">Rating: {product.rating}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProductGrid;