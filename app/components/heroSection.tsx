const HeroSection = () => {
    return (
      <main className="flex flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-b from-green-50 to-white">
        <h2 className="text-4xl font-extrabold mb-6 text-green-800">
          Welcome to حلف الفضول
        </h2>
        <p className="text-lg mb-8 text-gray-600 max-w-xl">
          Discover premium products that reflect modern Islamic lifestyle with elegance, quality, and authenticity.
        </p>
        <a
          href="#"
          className="bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition"
        >
          Explore Now
        </a>
      </main>
    );
  };
  
  export default HeroSection;
  