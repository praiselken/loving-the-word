import React, { useState, useEffect } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json") // Load product data from `public/products.json`
      .then((response) => response.json())
      .then((data) => {
        // Update image paths dynamically (no need for imports)
        const updatedData = data.map((product) => ({
          ...product,
          image: `/products/${product.image}`, // Use images from `public/products/`
        }));
        setProducts(updatedData);
      })
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  return (
    <div className="relative z-10 flex fontwfo flex-col items-center justify-center min-h-screen text-white px-4">
      <div className=" p-6 rounded-lg max-w-2xl text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 fontltw">Store</h1>
        <p className="text-lg mb-6">VOL 1</p>
      </div>

      {/* Product Images Grid */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-lg overflow-hidden text-center"
          >
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group block"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.text}
                className="w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-105 rounded-mlg"
              />

              {/* Transparent Hover Overlay */}
              <div className="absolute inset-0 bg-black opacity-30 transition-opacity duration-300 flex items-center justify-center text-white text-xl font-bold"></div>
            </a>

            {/* Product Info (Name & Price) */}
            <div className="mt-3 text-white">
              <h3 className="text-lg font-bold fontltw">{product.text}</h3>
              <p className="text-md text-gray-300 fontltw">£{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
