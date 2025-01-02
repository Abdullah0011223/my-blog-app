import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">My Blog</h2>
            <p className="text-gray-400 mt-2">Sharing knowledge, ideas, and experiences.</p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul>
              <li>
                <Link href="/" className="text-gray-400 hover:text-gray-200 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-gray-200 transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-gray-200 transition">
                  About
                </Link>
              </li>
            
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 transition"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 transition"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 transition"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 transition"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} My Blog. All Rights Reserved.</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
