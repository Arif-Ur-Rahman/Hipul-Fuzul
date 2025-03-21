import React from 'react';
import Header from '../components/header';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const products = [
  {
    id: 1,
    title: 'Men',
    description: 'Explore our exclusive men’s collection featuring the latest trends in fashion and style.',
    image: 'https://source.unsplash.com/featured/?men,fashion',
    link: '/products/men', // ✅ updated to match folder structure
  },
  {
    id: 2,
    title: 'Women',
    description: 'Discover elegant and trendy apparel designed to empower every woman.',
    image: 'https://source.unsplash.com/featured/?women,fashion',
    link: '/products/women',
  },
  {
    id: 3,
    title: 'Kids',
    description: 'Find adorable and comfortable outfits perfect for every kid’s adventure.',
    image: 'https://source.unsplash.com/featured/?kids,fashion',
    link: '/products/kids',
  },
];

function Products() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <nav className="flex items-center text-gray-600 text-sm">
          <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <span className="text-gray-800 font-semibold">Products</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">Our Product Categories</h1>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link href={product.link} key={product.id}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 flex flex-col h-full">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">{product.title}</h2>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <button className="mt-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
                    Explore {product.title}
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
