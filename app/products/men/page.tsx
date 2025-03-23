'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Header from '@/app/components/header';
import Image from 'next/image';
import { Loader2 } from 'lucide-react';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: {
    name: string;
  };
}

const MenPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://api.escuelajs.co/api/v1/products');
        if (!res.ok) {
          throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();

        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);

        // Extract unique categories
        const categoryNames = Array.from(
          new Set(data.map((product: Product) => product.category.name))
        );
        setCategories(['All', ...categoryNames]);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category);

    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category.name === category
      );
      setFilteredProducts(filtered);
    }
  }, [products]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
          Men&apos;s Collection
        </h1>

        {/* Category Filter */}
        <div className="flex justify-center mb-10">
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            aria-label="Filter by category"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="animate-spin h-12 w-12 text-indigo-600" />
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center text-red-600 font-semibold py-10">
            {error}
          </div>
        )}

        {/* Product Grid */}
        {!loading && !error && (
          <>
            {filteredProducts.length === 0 ? (
              <div className="text-center text-gray-600">No products found.</div>
            ) : (
              <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
                  >
                    <div className="relative h-56">
                      {product.images && product.images[0] ? (
                        <Image
                          src={product.images[0]}
                          alt={product.title}
                          fill
                          className="object-cover"
                          priority={index < 3}
                        />
                      ) : (
                        <div className="bg-gray-200 flex items-center justify-center h-full">
                          <span className="text-gray-500">No Image</span>
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h2 className="text-xl font-bold text-gray-800 mb-2">
                        {product.title}
                      </h2>
                      <p className="text-gray-600 text-sm flex-grow">
                        {product.description.length > 100
                          ? product.description.slice(0, 100) + '...'
                          : product.description}
                      </p>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-lg font-semibold text-indigo-600">
                          ${product.price}
                        </span>
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MenPage;