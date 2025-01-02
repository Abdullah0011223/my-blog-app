// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-[#808080] p-5 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-white text-3xl font-extrabold hover:text-gray-300 transition-colors duration-300">
          My Blog
        </Link>

        {/* Navbar Links */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-white text-lg font-medium hover:text-gray-400 transition-colors duration-300">
            Home
          </Link>
          <Link href="/blog" className="text-white text-lg font-medium hover:text-gray-400 transition-colors duration-300">
            Blog
          </Link>
          <Link href="/about" className="text-white text-lg font-medium hover:text-gray-400 transition-colors duration-300">
            About
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button className="text-white text-3xl" aria-label="Open menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (hidden by default, shown on small screens) */}
      <div className="md:hidden mt-4 space-y-4">
        <Link href="/" className="block text-white text-lg font-medium hover:text-gray-400 transition-colors duration-300">
          Home
        </Link>
        <Link href="/blog" className="block text-white text-lg font-medium hover:text-gray-400 transition-colors duration-300">
          Blog
        </Link>
        <Link href="/about" className="block text-white text-lg font-medium hover:text-gray-400 transition-colors duration-300">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
