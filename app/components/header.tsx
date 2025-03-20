import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 shadow-md bg-green-800">
      <div className="flex items-center gap-2">
        <Image
          src="/logo.png" // Replace with your logo
          alt="Hilf Al-Fudul logo"
          width={80}
          height={80}
        />
        <h1 className="text-2xl font-bold text-white">حلف الفضول</h1>
      </div>
      <nav className="flex gap-6 text-2xl text-gray-100">
        <a href="#" className="hover:text-white">Home</a>
        <a href="#about" className="hover:text-white">About</a>
        <a href="#contact" className="hover:text-white">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
