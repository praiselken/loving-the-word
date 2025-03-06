// import React from "react";

// const Store = () => {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <h1 className="text-4xl font-bold">Store</h1>
//       <p className="text-lg mt-4">Browse our amazing products.</p>
//     </div>
//   );
// };

// export default Store;

import React, { useState, useEffect } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json") // Load product data from `public/products.json`
      .then((response) => response.json())
      .then((data) => {
        // Update image paths dynamically
        const updatedData = data.map((product) => ({
          ...product,
          image: `/products/${product.image}`, // Use images from `public/products/`
        }));
        setProducts(updatedData);
      })
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4">
      <div className="bg-transparent bg-opacity-50 p-6 rounded-ml shadow-ml max-w-2xl text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Store</h1>
        <p className="text-lg mb-6">VOL I</p>
      </div>

      {/* Product Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {products.map((product) => (
          <a
            key={product.id}
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group overflow-hidden rounded-ml shadow-ml"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-center justify-center text-white text-xl font-bold">
              {product.name}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
